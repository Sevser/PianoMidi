<template>
  <div
    @mouseover.stop.prevent="checkEmitting"
    @mouseleave="over = false"
    :class="{ active, pressed: click && over }"
    class="white-button-container">
    <black-button
      v-if="hasNoteDies"
      :button="button.noteDies"
      />
  </div>
</template>

<script>
import EventBus from '../utills/EventBus';
import BlackButton from './blackButton';

export default {
  inject: ['activeButtons', 'mouseClicked'],
  name: 'whiteButton',
  components: {
    BlackButton,
  },
  props: {
    button: {
      type: Object,
      required: true,
    }
  },
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
  computed: {
    hasNoteDies() {
      return this.button.noteDies !== undefined;
    },
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
.white-button-container {
  width: calc(100vw / 50 - 2px);
  border: 1px solid rgba(0,0,0,0.2);
  position: relative;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: white;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.white-button-container.active {
  background: lime;
}
.white-button-container.pressed {
  background: lime;
}

</style>
