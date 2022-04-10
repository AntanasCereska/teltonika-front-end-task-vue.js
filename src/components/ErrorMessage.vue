<template>
  <span :class="['error-message', size && 'error-message--' + size]">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: {
    text: String,
    size: String,
  },
};
</script>

<style lang="scss">
@import "../scss/base/variables";

.error-message {
  color: $color-error;
  font-size: 14px;
  padding: 4px 8px;
  display: block;

  &--small {
    font-size: 14px;
  }

  &--medium {
    font-size: 16px;
    font-weight: 500;
    padding: 8px 0;
  }

  &--large {
    padding: 12px 0;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>