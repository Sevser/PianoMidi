.<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import EventBus from '../utills/EventBus';

const TOTAL_COLS = 120;

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
      const index = Math.floor(data.center / window.innerWidth * TOTAL_COLS);
      const oldVala = this.drawLines[this.drawLines.length - 1].additionalPoints[index];
      const delta = data.power;
      let newVal;
      if ((oldVala + delta) > 200) {
        newVal = 200;
      } else {
        newVal = oldVala + delta;
      }
      this.drawLines[this.drawLines.length - 1].additionalPoints[index] = newVal;
      for(let i = 10; i > 0; i--) {
        if ((index + i) < this.drawLines[this.drawLines.length - 1].additionalPoints.length) {
          const oldVal = this.drawLines[this.drawLines.length - 1].additionalPoints[index + i];
          const delta = newVal * Math.tanh((10 - i)/19);
          if ((oldVal + delta) > 200) {
            this.drawLines[this.drawLines.length - 1].additionalPoints[index + i] = 200;
          } else {
            this.drawLines[this.drawLines.length - 1].additionalPoints[index + i] = oldVal + delta;
          }
        }
        if ((index - i) >= 0) {
          const oldVal = this.drawLines[this.drawLines.length - 1].additionalPoints[index - i];
          const delta = newVal * Math.tanh((10 - i)/19);
          if ((oldVal + delta) > 200) {
            this.drawLines[this.drawLines.length - 1].additionalPoints[index - i] = 200 - i * 3;
          } else {
            this.drawLines[this.drawLines.length - 1].additionalPoints[index - i] = oldVal + delta;
          }
        }
      }
    },
    draw() {
      this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (let i = 0; i < this.drawLines.length - 1; i++ ){
        this.ctx.beginPath();
        this.ctx.moveTo(0, this.drawLines[i].baseHeight);
        for (let j = 0; j < TOTAL_COLS; j++) {
          this.ctx.lineTo(j * this.step, this.drawLines[i].baseHeight - this.drawLines[i].additionalPoints[j]);
          this.drawLines[i].additionalPoints[j] = this.drawLines[i + 1].additionalPoints[j];
        }
        this.ctx.lineTo(window.innerWidth, this.drawLines[i].baseHeight);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.stroke();
      }
      for (let j = 0; j < TOTAL_COLS; j++) {
        this.drawLines[this.drawLines.length - 1].additionalPoints[j] = Math.floor(this.drawLines[this.drawLines.length - 2].additionalPoints[j] * 0.9);
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
    this.step = Math.floor(window.innerWidth / TOTAL_COLS);
    this.$refs.canvas.height = window.innerHeight;
    this.ctx = this.$refs.canvas.getContext('2d');
    EventBus.$on('press:button', this.handlePressedButton.bind(this));
    this.intervalId = setInterval(this.draw.bind(this), 100);
    this.drawLines.fill(1);
    this.drawLines = this.drawLines.map((val, index) => ({
      index,
      baseHeight:  0 + ((window.innerHeight - (window.innerWidth / 100 * 13)) / 46) * (index + 1),
      additionalPoints: (new Array(TOTAL_COLS)).fill(0),
    }));
  }
};
</script>

<style scoped lang="scss">

</style>
