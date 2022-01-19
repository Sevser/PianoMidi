<template>
  <div class="app container">
    <canvas-backdrop />
    <Piano />
  </div>
</template>

<script>
import notes from './config/notes';
// import messageType from './config/messageType';
import Piano from './components/Piano';
import { computed } from 'vue';
import CanvasBackdrop from './components/canvasBackdrop';

export default {
  provide() {
    return {
      activeButtons: computed(() => this.activeButtons),
      lastReleasedButton: computed(() => this.lastReleasedButton),
    }
  },
  name: 'App',
  components: {
    CanvasBackdrop,
    Piano,
  },
  data: () => ({
    logs: [],
    pressedButtons: [],
    lastReleasedButton: null,
    midi: null,
    activeButtons: new Map(),
  }),
  methods: {
    onMIDISuccess( midiAccess ) {
      console.log( "MIDI ready!" );
      this.midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
      this.listInputsAndOutputs(this.midi);
      this.startLoggingMIDIInput(this.midi);
    },
    onMIDIFailure(msg) {
      console.log( "Failed to get MIDI access - " + msg );
    },
    listInputsAndOutputs( midiAccess ) {
      for (let entry of midiAccess.inputs) {
        var input = entry[1];
        console.log("Input port [type:'" + input.type + "'] id:'" + input.id +
            "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
            "' version:'" + input.version + "'");
      }
      for (let entry of midiAccess.outputs) {
        var output = entry[1];
        console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
            "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
            "' version:'" + output.version + "'" );
      }
    },
    onMIDIMessage( event ) {
      if (event.data[0] === 128) {
        this.activeButtons.delete(notes.getNoteByMIDINumber(event.data[1]).NoteName);
      } else if (event.data[0] === 144) {
        this.lastReleasedButton = notes.getNoteByMIDINumber(event.data[1]);
        this.activeButtons.set(this.lastReleasedButton.NoteName, event.data[2]);
      }
    },
    startLoggingMIDIInput( midiAccess ) {
      midiAccess.inputs.forEach( entry => {
        entry.onmidimessage = this.onMIDIMessage;
      });
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
