<template>
  <div class="create-category">
    <form class="create-category__form" @submit.prevent="handleSubmit">
      <h1 class="create-sub-category__title">Create Sub-Category</h1>
      <div>
        <LabelPicklist
          @change="handleChange"
          v-model="formValues.category_title"
          :options="$store.state.categories"
          label="Select category"
          name="category_title"
        />
        <ErrorMessage
          v-if="formErrors.category_title"
          :text="formErrors.category_title"
        />
      </div>
      <div>
        <LabelInput
          @change="handleChange"
          v-model="formValues.subcategory_title"
          label="Sub-category title"
          name="subcategory_title"
          placeholder="sub category title"
          type="text"
        />
        <ErrorMessage
          v-if="formErrors.subcategory_title"
          :text="formErrors.subcategory_title"
        />
      </div>
      <Button text="Create category" />
    </form>
  </div>
</template>

<script>
import LabelInput from "../components/LabelInput.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import LabelPicklist from "../components/LabelPicklist.vue";
import Button from "../components/Button.vue";

import { regexSpecialCharacters } from "../data/regex";

const initialValues = {
  subcategory_title: "",
  category_index: undefined,
};

export default {
  name: "CreateSubCategoryView",
  components: { LabelInput, ErrorMessage, LabelPicklist, Button },

  data() {
    return {
      formValues: initialValues,
      formErrors: {},
      isSubmit: false,
    };
  },
  methods: {
    handleChange(event) {
      console.log(this.formValues);
      const { name, value } = event.target;
      this.formValues = { ...this.formValues, [name]: value };
      //not sure if 2 lines below should be seperate function "handlePicklistChange"
      //and be assigned only for picklist (performance reasons)
      this.formValues.category_index = this.$store.state.categories.findIndex(
        (category) => category.title === this.formValues.category_title
      );

      this.formValues.subcategory_index = this.$store.state.categories?.[
        this.ormValues.category_index
      ]?.subcategories.findIndex(
        (x) => x.title === this.formValues?.subcategory_title
      );
    },

    handleSubmit() {
      this.formErrors = this.validate(this.formValues);
      this.isSubmit = true;
      console.log(this.formErrors);
      if (Object.keys(this.formErrors).length === 0 && this.isSubmit) {
        alert(
          `Sub-category '${this.formValues.subcategory_title}' for '${this.formValues.category_title}' category was created`
        );
        this.addSubcategory();
        this.formValues = initialValues;
      }
    },

    validate(values) {
      const errors = {};
      if (!values.category_title) {
        errors.category_title = "Select category";
      }
      if (!values.subcategory_title) {
        errors.subcategory_title = "Sub-Category title is required";
      } else if (
        this.$store.state.categories[
          this.formValues.category_index
        ].subcategories.some(
          (j) => j.title === this.formValues.subcategory_title
        )
      ) {
        errors.subcategory_title =
          "Sub-category with this title already exists";
      } else if (regexSpecialCharacters.test(values.subcategory_title)) {
        errors.subcategory_title = "Special characters not allowed";
      }
      return errors;
    },

    addSubcategory() {
      this.$store.commit("addSubcategory", this.formValues);
      this.formValues = initialValues;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>