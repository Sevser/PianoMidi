.<template>
  <canvas ref="canvas">
  </canvas>
</template>

<script>
import EventBus from '../utills/EventBus';
import vertex from '../utills/shaders/vertex';
import fragment from '../utills/shaders/fragment';

const TOTAL_COLS = 240;

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


      // setup a GLSL program
      const vertexShader = this.createVertexShader(this.gl, vertex);
      const fragmentShader = this.createFragmentShader(this.gl, fragment);
      this.program = this.gl.createProgram();
      this.gl.attachShader(this.program, vertexShader);
      this.gl.attachShader(this.program, fragmentShader);
      this.gl.linkProgram(this.program);

      // look up where the vertex data needs to go.
      var positionAttributeLocation  = this.gl.getAttribLocation(this.program, "coordinates");

      // Create a buffer and put a single clipspace rectangle in
      // it (2 triangles)
      var positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer);
      this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
      this.gl.useProgram(this.program);
      this.gl.enableVertexAttribArray(positionAttributeLocation);

      // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
      var size = 3;          // 2 components per iteration
      var type = this.gl.FLOAT;   // the data is 32bit floats
      var normalize = false; // don't normalize the data
      var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
      var offset1 = 0;        // start at the beginning of the buffer
      this.gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset1);
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
      const oldVala = this.drawLine.additionalPoints[index];
      const delta = data.power / 400;
      let newVal;
      if ((oldVala + delta) > 0.25) {
        newVal = 0.25;
      } else {
        newVal = oldVala + delta;
      }
      this.drawLine.additionalPoints[index] = newVal;
      for(let i = 10; i > 0; i--) {
        if ((index + i) < this.drawLine.additionalPoints.length) {
          const oldVal = this.drawLine.additionalPoints[index + i];
          const delta = newVal * Math.tanh((10 - i)/19);
          if ((oldVal + delta) > 0.25) {
            this.drawLine.additionalPoints[index + i] = Math.max(oldVal, 0.25 - 0.05 * i);
          } else {
            this.drawLine.additionalPoints[index + i] = oldVal + delta;
          }
        }
        if ((index - i) >= 0) {
          const oldVal = this.drawLine.additionalPoints[index - i];
          const delta = newVal * Math.tanh((10 - i)/19);
          if ((oldVal + delta) > 0.25) {
            this.drawLine.additionalPoints[index - i] = Math.max(oldVal, 0.25 - 0.05 * i);
          } else {
            this.drawLine.additionalPoints[index - i] = oldVal + delta;
          }
        }
      }
    },
    draw() {
      this.gl.clearColor(255.0, 255.0, 255.0, 1.0);
      let last = null;
      var positions = this.drawLine.additionalPoints
          .map((height, index) => {
            const oldHeight = this.drawLine.additionalPoints[index];
            this.drawLine.additionalPoints[index] = Math.fround(oldHeight * 0.9);
            last = [index / TOTAL_COLS * 2 - 1, - (this.drawLine.baseHeight / this.gl.canvas.height - oldHeight), 0];
            return last;
          })
          .flat();
      this.cachedArrays.push(new Float32Array(positions));
      if (this.cachedArrays.length > 50) {
        this.cachedArrays.shift();
      }
      let matrixLocation = this.gl.getUniformLocation(this.program, "u_matrix");
      for (let i = 0; i < this.cachedArrays.length; i++) {
        const matrix = [
            1, 0, 0,
            0, 1, 0,
            0, 1.5 - i / (this.cachedArrays.length / 1.5), 0
        ];
        this.gl.uniformMatrix3fv(matrixLocation, false, matrix);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, this.cachedArrays[i], this.gl.STATIC_DRAW);
        var primitiveType = this.gl.LINE_STRIP;
        var offset2 = 0;
        this.gl.drawArrays(primitiveType, offset2, TOTAL_COLS);
      }
    },
  },
  data() {
    return {
      ctx: null,
      intervalId: null,
      drawLine: new Array(46),
      cachedArrays: [],
      step: 0,
      gl: null,
      program: null,
    };
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  mounted() {
    this.$refs.canvas.width = window.innerWidth;
    this.step = Math.floor(window.innerWidth / TOTAL_COLS);
    this.$refs.canvas.height = window.innerHeight;
    EventBus.$on('press:button', this.handlePressedButton.bind(this));
    this.intervalId = setInterval(this.draw.bind(this), 100);
    this.drawLine = {
      baseHeight:  (window.innerHeight - (window.innerWidth / 100 * 26)),
      additionalPoints: (new Array(TOTAL_COLS)).fill(0),
    }
    this.start();
  }
};
</script>

<style scoped lang="scss">

</style>
