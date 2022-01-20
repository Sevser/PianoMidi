.<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
// import EventBus from '../utills/EventBus';
import vertex from '../utills/shaders/vertex';
import fragment from '../utills/shaders/fragment';

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
    initWebGL(canvas) {
      let gl = null;
      try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      } catch(e) {
        console.error(e);
      }
      if (!gl) {
        alert("Unable to initialize WebGL. Your browser may not support it.");
        gl = null;
      }
      return gl;
    },
    start() {
      this.gl = this.initWebGL(this.$refs.canvas);
      if (!this.gl) {
        return;
      }
      this.gl.clearColor(255.0, 255.0, 255.0, 1.0);                      // установить в качестве цвета очистки буфера цвета чёрный, полная непрозрачность
      this.gl.enable(this.gl.DEPTH_TEST);                               // включает использование буфера глубины
      this.gl.depthFunc(this.gl.LEQUAL);                                // определяет работу буфера глубины: более ближние объекты перекрывают дальние
      this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT);      // очистить буфер цвета и буфер глубины.
      // this.gl.viewport(0, 0, this.$refs.canvas.width, this.$refs.canvas.height);


      // setup a GLSL program
      const vertexShader = this.createVertexShader(this.gl, vertex);
      const fragmentShader = this.createFragmentShader(this.gl, fragment);
      const program = this.gl.createProgram();
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);

      // look up where the vertex data needs to go.
      var positionAttributeLocation  = this.gl.getAttribLocation(program, "a_position");

      // Create a buffer and put a single clipspace rectangle in
      // it (2 triangles)
      var positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
      // three 2d points
      var positions = [
        0, 0,
        0, 0.5,
        0.7, 0,
      ];
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW);


      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

      this.gl.useProgram(program);
      this.gl.enableVertexAttribArray(positionAttributeLocation);

      // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
      var size = 2;          // 2 components per iteration
      var type = this.gl.FLOAT;   // the data is 32bit floats
      var normalize = false; // don't normalize the data
      var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
      var offset1 = 0;        // start at the beginning of the buffer
      this.gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset1);

      // draw
      var primitiveType = this.gl.TRIANGLES;
      var offset2 = 0;
      var count = 3;
      this.gl.drawArrays(primitiveType, offset2, count);

    },
    createFragmentShader(gl, fragment) {
      const shader = gl.createShader(gl.FRAGMENT_SHADER);
      gl.shaderSource(shader, fragment);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    },
    createVertexShader(gl, vertex) {
      const shader = gl.createShader(gl.VERTEX_SHADER);
      gl.shaderSource(shader, vertex);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
        return null;
      }
      return shader;
    },
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
      gl: null,
    };
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    this.$refs.canvas.width = window.innerWidth;
    this.step = Math.floor(window.innerWidth / TOTAL_COLS);
    this.$refs.canvas.height = window.innerHeight;
    //this.ctx = this.$refs.canvas.getContext('2d');
    // EventBus.$on('press:button', this.handlePressedButton.bind(this));
    this.start();
    //this.intervalId = setInterval(this.draw.bind(this), 100);
    // this.drawLines.fill(1);
    // this.drawLines = this.drawLines.map((val, index) => ({
    //   index,
    //   baseHeight:  0 + ((window.innerHeight - (window.innerWidth / 100 * 13)) / 46) * (index + 1),
    //   additionalPoints: (new Array(TOTAL_COLS)).fill(0),
    // }));
  }
};
</script>

<style scoped lang="scss">

</style>
