<template>
  <div
      :class="{ active }"
      class="black-button-container">
  </div>
</template>

<script>

export default {
  inject: ['activeButtons'],
  name: 'blackButton',
  components: {},
  props: {
    button: {
      type: Object,
      required: true,
    },
  },
  computed: {
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
.black-button-container {
  background: black;
  width: calc(100vw / 60 - 2px);
  border: 1px solid rgba(0,0,0,0.2);
  z-index: 1;
  position: absolute;
  left: calc((100vw / 50 - 2px) * 0.55);
  top: 0;
  height: 66%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.black-button-container.active {
  background: lime;
}

</style>
