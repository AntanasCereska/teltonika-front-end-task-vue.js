<template>
  <nav
    :class="['navigation-mobile', isVisible && 'navigation-mobile--visible']"
  >
    <span class="navigation-mobile__icon-close">
      <ButtonIcon
        @click="$emit('toggle-navigation-mobile')"
        iconType="close"
        iconSize="xl"
      />
    </span>
    <nav class="navigation-mobile__wrapper">NavLink</nav>
  </nav>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";
export default {
  name: "NavigationMobile",
  components: {
    ButtonIcon,
  },
  props: { isVisible: Boolean },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/mixins";
@import "../scss/base/variables";

.navigation-mobile {
  padding: 128px 32px;
  position: fixed;
  top: 0;
  background-color: $color-white;
  width: 100vw;
  height: 100vh;
  display: none;
  align-items: center;
  justify-content: top;
  flex-direction: column;
  gap: 36px;
  overflow-y: scroll;
  z-index: 1;
  left: 100%;
  transition: all 0.25s ease-out;

  @include media-query-tablet-and-down {
    display: flex;
  }

  @include media-query-phone {
    padding: 64px 20px;
  }

  &--visible {
    left: 0;
  }

  &__icon-close {
    position: absolute;
    top: 16px;
    right: 32px;
    cursor: pointer;

    @include media-query-phone {
      right: 20px;
    }
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 560px;
    max-width: 100%;
    gap: 24px;
    padding-bottom: 48px;
  }

  &__list-item {
    text-decoration: none;
    color: $color-text;
    font-weight: 600;
  }
}
</style>