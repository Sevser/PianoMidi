export default `
attribute vec2 coordinates;
uniform mat3 u_matrix;


void main(void) {
  vec2 position = (u_matrix * vec3(coordinates, 1)).xy;
  gl_Position = vec4(position, 0, 1.0);
}
`;
