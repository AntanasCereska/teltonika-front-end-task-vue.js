<template>
  <div class="footer"></div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../scss/base/mixins";
@import "../scss/base/variables";

.footer {
  height: 64px;
  width: 100%;
  background-color: $color-white;
  box-shadow: $box-shadow-layout;
}
</style>