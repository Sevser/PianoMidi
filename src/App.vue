<template>
  <div
    @mousedown="clicked = true"
    @mouseup="clicked = false"
    @mouseleave="clicked = false"
    class="app container">
    <canvas-backdrop />
    <Piano />
    <Settings
      :model-value="selectedMidi"
      @update:model-value="selectedMidi = $event"
      :available-midi-devices="availableMidiDevices"/>
  </div>
</template>

<script>
import notes from './config/notes';
// import messageType from './config/messageType';
import Piano from './components/Piano';
import { computed } from 'vue';
import CanvasBackdrop from './components/canvasBackdrop';
import Settings from './components/settings';

export default {
  provide() {
    return {
      activeButtons: computed(() => this.activeButtons),
      lastReleasedButton: computed(() => this.lastReleasedButton),
      mouseClicked: computed(() => this.clicked),
    }
  },
  name: 'App',
  components: {
    Settings,
    CanvasBackdrop,
    Piano,
  },
  watch: {
    selectedMidi(newVal) {
      this.startLoggingMIDIInput(this.midi, newVal);
    },
  },
  data: () => ({
    logs: [],
    pressedButtons: [],
    lastReleasedButton: null,
    midi: null,
    clicked: false,
    activeButtons: new Map(),
    availableMidiDevices: [],
    selectedMidi: null,
  }),
  methods: {
    onMIDISuccess( midiAccess ) {
      this.midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
      this.listInputsAndOutputs(this.midi);
      this.startLoggingMIDIInput(this.midi);
    },
    onMIDIFailure(msg) {
      console.log( "Failed to get MIDI access - " + msg );
    },
    listInputsAndOutputs( midiAccess ) {
      this.availableMidiDevices = Array.from(midiAccess.inputs.values()).map(midi => ({
        midi,
        name: "' manufacturer:'" + midi.manufacturer + "' name:'" + midi.name + "' version:'" + midi.version + "'",
      }));
    },
    onMIDIMessage( event ) {
      if (event.data[0] === 128) {
        this.activeButtons.delete(notes.getNoteByMIDINumber(event.data[1]).NoteName);
      } else if (event.data[0] === 144) {
        this.lastReleasedButton = notes.getNoteByMIDINumber(event.data[1]);
        this.activeButtons.set(this.lastReleasedButton.NoteName, event.data[2]);
      }
    },
    startLoggingMIDIInput( midiAccess, index) {
      midiAccess.inputs.forEach( entry => {
        entry.onmidimessage = null;
      });
      if (midiAccess.inputs.get(index) !== undefined) {
        midiAccess.inputs.get(index).onmidimessage = this.onMIDIMessage;
      }
    }
  },
  mounted() {
    navigator
        .requestMIDIAccess()
        .then( this.onMIDISuccess.bind(this), this.onMIDIFailure.bind(this) );
  },
}
</script>

<style>
html, body, div#app, .container.app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
}
</style>
<style scoped>
.container.app {
  display: flex;
}
</style>
