<template>
  <div
      @mouseover.stop.prevent="checkEmitting"
      @mouseleave="over = false"
      :class="{ active, pressed: click && over }"
      class="black-button-container">
  </div>
</template>

<script>

import EventBus from '../utills/EventBus';

export default {
  inject: ['activeButtons', 'mouseClicked'],
  name: 'blackButton',
  components: {},
  watch: {
    active(nVal) {
      if (nVal) {
        EventBus.$emit('press:button', {
          ...this.topCenterPosition,
          power: this.activeButtons.value.get(this.button.NoteName),
        });
      }
    },
  },
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
    click() {
      return this.mouseClicked.value;
    },
  },
  methods: {
    checkEmitting() {
      this.over = true;
      if (this.click) {
        EventBus.$emit('press:button', {
          ...this.topCenterPosition,
          power: 100,
        });
      }
    },
  },
  data() {
    return {
      pressed: false,
      over: false,
      topCenterPosition: { top: null, left: null, width: null, center: null },
    };
  },
  mounted() {
    this.topCenterPosition.top = this.$el.getBoundingClientRect().top;
    this.topCenterPosition.width = this.$el.getBoundingClientRect().width;
    this.topCenterPosition.left = this.$el.getBoundingClientRect().left;
    this.topCenterPosition.center = this.topCenterPosition.left + this.topCenterPosition.width / 2;
  }
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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.black-button-container.active {
  background: lime;
}
.black-button-container.pressed {
  background: lime;
}

</style>
