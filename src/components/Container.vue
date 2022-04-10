<template>
  <div
    :class="[
      'container',
      background && 'container--background',
      boxShadow && 'container--shadow',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    background: Boolean,
    boxShadow: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/mixins";
@import "../scss/base/variables";

.container {
  padding: 24px;
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1400px) {
    padding: 16px;
    border-radius: 12px;
  }

  &--background {
    background-color: $color-accent-1;
  }

  &--shadow {
    box-shadow: $box-shadow-layout;
  }
}
</style>