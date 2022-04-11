<template>
  <select @change="onChange" :name="name" :value="value">
    <option v-for="option in options" :key="option">
      {{ option.title }}
    </option>
  </select>
</template>

<script>
export default {
  name: "LabelPicklist",
  props: {
    options: Array,
    selected: String,
    name: String,
    value: String,
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<style>
</style>