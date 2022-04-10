import { createStore } from "vuex";
import { dummyLocalStorageData } from "@/data/dummyLocalStorageData";

export default createStore({
  state: {
    categories:
      JSON.parse(localStorage.getItem("categories")) || dummyLocalStorageData,
  },
  getters: {
    categoryData: (state) => (categoryId, subcategoryId) => {
      const categoryData = state.categories.find(
        (category) => category.title === categoryId
      );
      const subcategoryData = categoryData.subcategories.find(
        (subcategory) => subcategory.title === subcategoryId
      );
      return subcategoryData;
    },
  },

  mutations: {
    addCategory(state, formValues) {
      const category = { title: formValues.category_title, subcategories: [] };
      state.categories.push(category);
    },
  },
  actions: {
    /*     createCategory(context) {
      context.commit("createCategory");
    }, */
  },
  modules: {},
});
