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

    addSubcategory(state, formValues) {
      const subcategory = {
        title: formValues.subcategory_title,
        subsubcategories: [],
      };
      state.categories[formValues.category_index].subcategories.push(
        subcategory
      );
    },

    deleteCategory(state, categoryTitle) {
      state.categories = state.categories.filter(
        (category) => category.title !== categoryTitle
      );
    },

    addUser(state, formValues) {
      const user = {
        first_name: formValues.first_name,
        last_name: formValues.last_name,
        gender: formValues.gender,
        age: formValues.age,
        email: formValues.email,
        password: formValues.password,
      };
      state.categories[formValues.category_index].subcategories[
        formValues.subcategory_index
      ].subsubcategories[formValues.subsubcategory_index].users.push(user);
    },
  },

  actions: {},

  modules: {},
});
