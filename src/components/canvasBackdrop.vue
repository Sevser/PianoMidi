<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import EventBus from '../utills/EventBus';
export default {
  name: 'canvasBackdrop',
  components: {},
  props: {},
  computed: {
    lastButton() {
      return this.lastReleasedButton.value && this.lastReleasedButton.value.NoteName;
    }
  },
  methods: {
    handlePressedButton(data) {
      const index = Math.floor(data.center / window.innerWidth * 100);
      let val = this.drawLines[this.drawLines.length - 1].additionalPoints[index];
      const newVal = (val + data.power) > 200 ? 200 : val + data.power;
      this.drawLines[this.drawLines.length - 1].additionalPoints[index] = newVal;
      for(let i = 0; i < 20; i++) {
        if ((index + i) < this.drawLines[this.drawLines.length - 1].additionalPoints[index].length) {
          this.drawLines[this.drawLines.length - 1].additionalPoints[index + i] *= Math.log10(newVal / 20);
        }
        if ((index - i) >= 0) {
          this.drawLines[this.drawLines.length - 1].additionalPoints[index - i] *= Math.log10(newVal / 20);
        }
      }
    },
    draw() {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < this.drawLines.length - 1; i++ ){
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.drawLines[i].baseHeight);
        for (let j = 0; j < this.drawLines[i].additionalPoints.length; j++) {
          this.ctx.lineTo(j * this.step, this.drawLines[i].baseHeight - this.drawLines[i].additionalPoints[j]);
          this.drawLines[i].additionalPoints[j] = this.drawLines[i + 1].additionalPoints[j];
        }
        this.ctx.lineTo(window.innerWidth, this.drawLines[i].baseHeight);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.stroke();
      }
      for (let j = 0; j < 200; j++) {
        this.drawLines[this.drawLines.length - 1].additionalPoints[j] = Math.floor(this.drawLines[this.drawLines.length - 2].additionalPoints[j] * 0.95);
      }

    },
  },
  data() {
    return {
      ctx: null,
      intervalId: null,
      drawLines: new Array(46),
      step: 0,
    };
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    this.$refs.canvas.width = window.innerWidth;
    this.step = Math.floor(window.innerWidth / 100);
    this.$refs.canvas.height = window.innerHeight;
    this.ctx = this.$refs.canvas.getContext('2d');
    EventBus.$on('press:button', this.handlePressedButton.bind(this));
    this.intervalId = setInterval(this.draw.bind(this), 100);
    this.drawLines.fill(1);
    this.drawLines = this.drawLines.map((val, index) => ({
      index,
      baseHeight:  0 + ((window.innerHeight - (window.innerWidth / 100 * 13)) / 46) * (index + 1),
      additionalPoints: (new Array(200)).fill(0),
    }));
  }
};
</script>

<style scoped lang="scss">

</style>
