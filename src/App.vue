<template>
  <div class="App">
    <!--     <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <div class="App__header"><Header /></div>
    <div class="App__base">
      <div class="App__navigation"><NavigationDesktop /></div>
      <div class="App__content">
        <router-view />
      </div>
    </div>
    <div class="App__footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationDesktop from "./components/NavigationDesktop";
import { dummyLocalStorageData } from "./data/dummyLocalStorageData";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    NavigationDesktop,
  },

  data() {
    return {
      categories: [],
    };
  },

  //not sure about mounted and store index.js state set from local storage
  mounted() {
    const localStorageData = localStorage.getItem("categories");
    localStorage.setItem(
      "categories",
      localStorageData || JSON.stringify(dummyLocalStorageData)
    );
    console.log(JSON.parse(localStorageData));
  },

  //seems like this does not work correctly,
  //so had to use localStorage.setItem on every mutation
  //then creating categories, subcategories, etc...
  watch: {
    categories: {
      handler(newCategories) {
        localStorage.categories = JSON.stringify(newCategories);
        console.log("AAA");
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
