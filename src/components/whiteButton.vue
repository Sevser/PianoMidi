<template>
  <div
    :class="{ active }"
    class="white-button-container">
    <black-button
      v-if="hasNoteDies"
      :button="button.noteDies"
      />
  </div>
</template>

<script>

import BlackButton from './blackButton';
export default {
  inject: ['activeButtons'],
  name: 'whiteButton',
  components: {BlackButton},
  props: {
    button: {
      type: Object,
      required: true,
    }
  },
  computed: {
    hasNoteDies() {
      return this.button.noteDies !== undefined;
    },
    active() {
      return this.activeButtons.value.has(this.button.NoteName);
    },
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.white-button-container {
  width: calc(100vw / 50 - 2px);
  border: 1px solid rgba(0,0,0,0.2);
  position: relative;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: white;
}
.white-button-container.active {
  background: lime;
}

</style>
