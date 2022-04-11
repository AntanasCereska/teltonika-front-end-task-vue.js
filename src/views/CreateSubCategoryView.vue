<template>
  <div class="create-category">
    <form class="create-category__form" @submit.prevent="handleSubmit">
      <h1 class="create-sub-category__title">Create Sub-Category</h1>
      <div>
        <LabelPicklist
          v-model="formValues.category_title"
          :options="$store.state.categories"
          name="category_title"
          :value="formValues.category_title"
          @change="handleChange"
        />
        <ErrorMessage
          v-if="formErrors.category_title"
          :text="formErrors.category_title"
        />
        <LabelInput
          label="Sub-category title"
          type="text"
          placeholder="sub category title"
          v-model="formValues.subcategory_title"
          @change="handleChange"
          name="subcategory_title"
          :value="formValues.subcategory_title"
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

const initialaValues = { category_title: "", subcategory_title: "" };

export default {
  name: "CreateSubCategoryView",
  components: { LabelInput, ErrorMessage, LabelPicklist, Button },

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
      console.log(this.formValues);
    },
  },
};
</script>

<style>
</style>