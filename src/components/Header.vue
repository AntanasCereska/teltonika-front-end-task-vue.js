<template>
  <header class="header">
    <span class="header__brand">User Managment System</span>
    <NavigationMobile
      :isVisible="isVisible"
      @toggle-navigation-mobile="toggleNavigationMobile"
    />
    <div class="header__buttons">
      <router-link to="/settings">
        <ButtonIcon iconType="gear" iconSize="xl"
      /></router-link>
      <div class="header__button-menu">
        <ButtonIcon
          iconType="bars"
          iconSize="xl"
          @btn-click="toggleNavigationMobile"
        />
      </div>
    </div>
  </header>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";
import NavigationMobile from "./NavigationMobile.vue";

export default {
  name: "Header",
  components: {
    ButtonIcon,
    NavigationMobile,
  },
  data() {
    return { isVisible: false };
  },
  methods: {
    toggleNavigationMobile() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/mixins";
@import "../scss/base/variables";
.header {
  height: 64px;
  width: 100%;
  background-color: $color-white;
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: $box-shadow-layout;
  z-index: 100;

  @include media-query-phone {
    padding: 0 20px;
  }

  &__brand {
    font-weight: 600;
    font-size: 20px;

    @include media-query-phone {
      font-size: 16px;
    }
  }

  &__buttons {
    display: flex;
    gap: 16px;
  }

  &__button-menu {
    display: none;

    @include media-query-tablet-and-down {
      display: block;
    }
  }
}
</style>