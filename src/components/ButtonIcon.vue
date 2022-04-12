<template>
  <button
    @click.prevent="onClick"
    :class="['button-icon', backgroundColor && 'button-icon--background-color']"
  >
    <span
      :class="[
        'button-icon__icon',
        'fa',
        iconType && 'fa-' + iconType,
        iconSize && 'fa-' + iconSize,
        iconSize && 'button-icon__icon--' + iconSize,
      ]"
    ></span>
  </button>
</template>
<script>
export default {
  name: "ButtonIcon",
  props: {
    iconType: String,
    iconSize: String,
    backgroundColor: Boolean,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/variables";

.button-icon {
  border: 0;
  background: none;
  cursor: pointer;
  padding: 4px;

  border-radius: 8px;
  transition: 0.5s;
  block-size: fit-content;

  &--background-color {
    background-color: $color-accent-2;

    &:hover {
      transform: translateY(-2px);
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    &--xl {
      width: 28px;
      height: 28px;
    }

    &--lg {
      width: 20px;
      height: 20px;
    }

    &--md {
      width: 14px;
      height: 14px;
      padding: 8px;
    }
  }
}
</style>