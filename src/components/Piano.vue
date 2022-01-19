<template>
  <div class="container">
    <white-button
      :key="button.NoteName"
      :button="button"
      v-for="button in whites" />
  </div>
</template>

<script>
import { notes } from '../config/notes';
import WhiteButton from './whiteButton';

export default {
  name: 'Piano',
  components: {
    WhiteButton,
  },
  props: {},
  computed: {
  },
  methods: {
    createWhites(notes) {
      return notes
          .filter(numb => numb.NoteName.length === 2)
          .reverse()
          .map(note => ({
            ...note,
            noteDies: notes.find(subNote => subNote.NoteName[0] === note.NoteName[0] && subNote.NoteName[2] === note.NoteName[1])
          }));
    },
  },
  data() {
    return {
      whites: this.createWhites(notes),
      notes,
    };
  },
};
</script>

<style scoped>
.container {
  width: 100vw;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 13vw;
  -webkit-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px -4px 8px 0px rgba(34, 60, 80, 0.2);
  display: flex;
  background: black;
}
</style>
