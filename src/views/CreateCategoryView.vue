<template>
  <div class="create-category">
    <form class="create-category__form" @submit.prevent="handleSubmit">
      <h1 class="create-category__title">Create Category</h1>
      <div>
        <LabelInput
          label="Category title"
          type="text"
          placeholder="category title"
          v-model="formValues.category_title"
          @change="handleChange"
          name="category_title"
          :value="formValues.category_title"
        />
        <ErrorMessage
          v-if="formErrors.category_title"
          :text="formErrors.category_title"
        />
      </div>
      <Button text="Create category" />
    </form>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import LabelInput from "../components/LabelInput.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { regexSpecialCharacters } from "../data/regex";

const initialaValues = { category_title: "" };

export default {
  name: "CreateCategoryView",
  components: {
    LabelInput,
    Button,
    ErrorMessage,
  },

  data() {
    return {
      formValues: initialaValues,
      formErrors: {},
      isSubmit: false,
    };
  },

  methods: {
    handleChange(event) {
      const { name, value } = event.target;
      this.formValues = { ...this.formValues, [name]: value };
    },

    handleSubmit() {
      this.formErrors = this.validate(this.formValues);
      this.isSubmit = true;
      if (Object.keys(this.formErrors).length === 0 && this.isSubmit) {
        alert(`Category ${this.formValues.category_title} was created`);
        this.addCategory();
        this.formValues = initialaValues;
      }
    },

    validate(values) {
      const errors = {};
      if (!values.category_title) {
        errors.category_title = "Category title is required";
      } else if (
        this.$store.state.categories.some(
          (i) => i.title === values.category_title
        )
      ) {
        errors.category_title = "Category with this title already exists";
      } else if (regexSpecialCharacters.test(values.category_title)) {
        errors.category_title = "Special characters not allowed";
      }
      return errors;
    },

    addCategory() {
      this.$store.commit("addCategory", this.formValues);
      this.formValues = initialaValues;
    },
  },
};
</script>

<style  lang="scss">
@import "../scss/base/mixins";
@import "../scss/base/variables";

.create-category {
  @include page-layout;

  &__title {
    text-align: left;
  }

  &__form {
    box-shadow: $box-shadow-button;
    background-color: $form-background;
    padding: 48px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
    max-width: 480px;

    @include media-query-tablet-and-down {
      padding: 36px 24px;
    }
  }

  @media (max-width: 1400px) {
    padding: 36px 24px;
  }
}
</style>