<template>
  <div>
    <div
        :key="index"
        v-for="(log, index) in logs.slice(-50)">
      {{log}}
    </div>
  </div>
</template>

<script>
import notes from './config/notes';
import messageType from './config/messageType';

export default {
  name: 'App',
  data: () => ({
    logs: [],
    midi: null,
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
      var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
      str += "type " + messageType.getTypeByCode(event.data[0]).description + " ";
      str += notes.getNoteByMIDINumber(event.data[1]).NoteName + " ";
      str += "volume " + event.data[2].toString(10) + " of 100 ";
      this.logs.push(str);
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
html, body, div#app {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  position: relative;
}
</style>
