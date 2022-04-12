<template>
  <div class="category">
    <Container background>
      <h1 class="category__category-title">
        Category:
        {{ this.$route.params.categoryId.replaceAll("_", " ") }}
      </h1>
      <h2 class="category__subcategory-title">
        Sub-category:
        {{ this.$route.params.subcategoryId.replaceAll("_", " ") }}
      </h2>
      <LabelInput
        label="Search for sub-sub-category"
        placeholder="input search word to filter sub-sub-categories"
      />
    </Container>
    <Container>
      <div class="category__data">
        <span v-if="filteredSubsubcategories === 0">
          <ErrorMessage text="No sub-sub-categories" size="large" />
        </span>
        <div
          class="category__data-item"
          v-for="subsubcategory in filteredSubsubcategories"
          :key="subsubcategory"
        >
          <Table :data="subsubcategory" />
        </div>
      </div>
    </Container>
  </div>
  <div>
    <div v-for="item in filteredSubsubcategories" :key="item">
      {{ item.title }}
    </div>
  </div>
  <input type="search" placeholder="start typing" v-model="searchPhrase" />
</template>

<script>
import Container from "../components/Container.vue";
import LabelInput from "../components/LabelInput.vue";
import Table from "../components/Table.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
export default {
  name: "CategoryView",
  data() {
    return {
      filteredSubsubcategories: [],
      searchPhrase: "",
    };
  },
  watch: {
    searchPhrase() {
      this.filteredSubsubcategories = this.$store.getters
        .categoryData(
          this.categoryId.replaceAll("_", " "),
          this.subcategoryId.replaceAll("_", " ")
        )
        .subsubcategories.filter((category) =>
          category.title.toLowerCase().includes(this.searchPhrase)
        );
    },
  },

  components: {
    Container,
    LabelInput,
    Table,
    ErrorMessage,
  },
  props: {
    categoryId: {
      required: true,
    },
    subcategoryId: {
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/variables";

.category {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  text-align: left;

  &__category-title {
    align-self: flex-start;
  }

  &__subcategory-title {
    align-self: flex-start;
    margin-bottom: 24px;
  }

  &__data {
    display: flex;
    flex-direction: column;
    gap: 48px;
    width: 100%;
    height: 100%;
  }

  &__data-item {
    position: relative;
    width: 100%;
    overflow-x: auto;
    overflow-y: auto;
  }
}
</style>