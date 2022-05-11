<template>
  <div class="create-category">
    <form class="create-category__form" @submit.prevent="addCategory">
      <h1 class="create-category__title">Create Category</h1>
      {{ formErrors }}
      {{ formValues }}
      <div>
        <LabelInput
          @change="onInputChange($event, 'category_title')"
          v-model="formValues.category_title"
          label="Category title"
          placeholder="category title"
          type="text"
        />
        <span v-for="(error, index) in formErrors.category_title" :key="index">
          <ErrorMessage :text="error"
        /></span>
      </div>
      <Button text="Create category" :disabled="!isFormValid" />
    </form>
  </div>
</template>
<script>
import Button from "../components/Button.vue";
import LabelInput from "../components/LabelInput.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import validationMixin from "../mixins/validationMixin";

//const initialalValues = { category_title: "" };
export default {
  name: "CreateCategoryView",
  components: {
    LabelInput,
    Button,
    ErrorMessage,
  },
  data: () => ({
    formValues: {
      category_title: "",
    },
    formErrors: {},
  }),
  computed: {
    isFormValid() {
      return this.validateForm(this.formValues).formIsValid;
    },
  },
  methods: {
    onInputChange(event, inputName) {
      console.log(event, inputName);
      console.log(this.formValues.category_title);
      const inputValue = event.target.value;
      const inputErrors = this.validateField(inputName, inputValue);
      if (inputErrors && inputErrors.length) {
        this.formErrors[inputName] = inputErrors;
      } else {
        this.formErrors[inputName] = null;
      }
    },
    handleSubmit() {
      if (this.formErrors.length === 0) {
        this.addCategory;
      }
    },
    addCategory() {
      alert("New category '" + this.formValues.category_title + "' was added");
      this.$store.commit("addCategory", this.formValues);
      this.formValues = { category_title: "" };
    },
  },
  mixins: [validationMixin],
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