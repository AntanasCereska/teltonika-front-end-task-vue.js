<template>
  <button class="button" :form="form" :value="value">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    type: String,
    form: String,
    value: String,
  },
  methods: {},
};
</script>

<style lang='scss' scoped>
@import "../scss/base/variables";

.button {
  padding: 12px;
  background-color: $color-primary;
  border-radius: 12px;
  text-align: center;
  border: none;
  box-shadow: $box-shadow-button;
  transition: all 0.3s;
  cursor: pointer;
  font-weight: 400;
  color: $color-white;
  font-size: 18px;
  width: 100%;
  max-width: 400px;

  &:hover {
    background-color: $color-primary-hover;
  }
}
</style>