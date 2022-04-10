<template>
  <aside class="navigation-desktop">
    <nav class="navigation-desktop__wrapper">
      <router-link class="navigation-desktop__list-item" to="/new-user"
        >New user</router-link
      >
      <router-link class="navigation-desktop__list-item" to="/create-category"
        >Create category</router-link
      >
      <router-link
        class="navigation-desktop__list-item"
        to="/create-sub-category"
        >Create sub-category</router-link
      >
      <router-link
        class="navigation-desktop__list-item"
        to="/create-sub-sub-category"
        >Create sub-sub-category</router-link
      >
      <div v-for="category in $store.state.categories" :key="category.title">
        <NavigationList :category="category" />
      </div>
    </nav>
  </aside>
</template>

<script>
import NavigationList from "./NavigationList.vue";
export default {
  name: "NavigationDesktop",
  components: {
    NavigationList,
  },
  props: { "$store.state.categories": Array },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/variables";

.navigation-desktop {
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  padding: 36px;
  width: 400px;
  height: 100%;
  box-shadow: $box-shadow-layout;

  &__list-item {
    text-decoration: none;
    color: $color-text;
    font-weight: 600;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 48px;
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: white;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $color-primary;
    border-radius: 100vw;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: $color-primary-hover;
  }
}

.router-link-active {
  color: $color-primary;
}
</style>