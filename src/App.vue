//scenarijus:
//esant kategorijoj x (pvz Admins)
//ir ja istrynus apmeto errorais
//nes reikia renderint data kurios neber
//todle turbut reikia padaryt redirecta i kita route
//ar kazka tokio

<template>
  <div class="App">
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
      categories: this.$store.categories,
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
        console.log("aaa");
        localStorage.categories = JSON.stringify(newCategories);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
