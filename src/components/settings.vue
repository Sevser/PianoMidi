<template>
  <div class="settings-container">
    select a midi source
    <select
      @input="$emit('update:modelValue', $event.target.value)"
      @select="$emit('update:modelValue', $event.target.value)"
      :value="modelValue" >
      <option
        :key="device.midi.id"
        :value="device.midi.id"
        v-for="(device) in availableMidiDevices">
        {{device.name}}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'settings',
  components: {},
  props: {
    availableMidiDevices: {
      type: Array,
      default: () => ([]),
    },
    modelValue: [String, Object],
  },
  computed: {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.settings-container {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background: white;
  -webkit-box-shadow: 0px 0px 15px -1px #000000;
  box-shadow: 0px 0px 15px -1px #000000;
  display: flex;
  flex-direction: column;
}
</style>
