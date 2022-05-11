//nereikia :value picklistuose in inputs, nes yra v-model
<template>
  <div class="new-user">
    <form class="new-user__form" @submit.prevent="handleSubmit">
      <div class="new-user__div1">
        <h1 class="new-user__title">Register new user</h1>
      </div>
      <div class="new-user__div2">
        <LabelInput
          @change="handleChange"
          v-model="formValues.first_name"
          label="First name"
          name="first_name"
          placeholder="user first name"
          type="text"
        />
        <ErrorMessage
          v-if="formErrors.first_name"
          :text="formErrors.first_name"
        />
      </div>
      <div class="new-user__div3">
        <LabelInput
          @change="handleChange"
          v-model="formValues.last_name"
          label="Last name"
          name="last_name"
          placeholder="user last name"
          type="text"
        />
        <ErrorMessage
          v-if="formErrors.last_name"
          :text="formErrors.last_name"
        />
      </div>
      <div class="new-user__div4">
        <LabelPicklist
          @change="handleChange"
          :options="genderOptions"
          label="Gender"
          name="gender"
        />
        <ErrorMessage v-if="formErrors.gender" :text="formErrors.gender" />
      </div>
      <div class="new-user__div5">
        <LabelInput
          @change="handleChange"
          v-model="formValues.age"
          label="Age"
          name="age"
          placeholder="user age"
          type="number"
        />
        <ErrorMessage v-if="formErrors.age" :text="formErrors.age" />
      </div>
      <div class="new-user__div6">
        <LabelInput
          @change="handleChange"
          v-model="formValues.email"
          label="Email"
          name="email"
          placeholder="user email"
          type="email"
        />
        <ErrorMessage v-if="formErrors.email" :text="formErrors.email" />
      </div>
      <div class="new-user__div7">
        <LabelPicklist
          @change="handleChange"
          v-model="formValues.category_title"
          label="Category"
          name="category_title"
          :options="$store.state.categories"
        />
        <ErrorMessage
          v-if="formErrors.category_title"
          :text="formErrors.category_title"
        />
      </div>
      <div class="new-user__div8">
        <LabelPicklist
          @change="handleChange"
          v-model="formValues.subcategory_title"
          :options="
            $store.state.categories[this.formValues.category_index]
              ?.subcategories
          "
          label="Sub-category"
          name="subcategory_title"
        />
        <ErrorMessage
          v-if="formErrors.subcategory_title"
          :text="formErrors.subcategory_title"
        />
      </div>
      <div class="new-user__div9">
        <LabelPicklist
          @change="handleChange"
          v-model="formValues.subsubcategory_title"
          :options="
            $store.state.categories[this.formValues.category_index]
              ?.subcategories?.[this.formValues.subcategory_index]
              ?.subsubcategories
          "
          label="Sub-sub-category"
          name="subsubcategory_title"
        />
        <ErrorMessage
          v-if="formErrors.subsubcategory_title"
          :text="formErrors.subsubcategory_title"
        />
        {{ formValues.subsubcategory_title }}
      </div>
      <div class="new-user__div10">
        <LabelInput
          @change="handleChange"
          v-model="formValues.password"
          label="Password"
          type="password"
          placeholder="user password"
          name="password"
        />
        <ErrorMessage v-if="formErrors.password" :text="formErrors.password" />
      </div>
      <div class="new-user__div11">
        <LabelInput
          @change="handleChange"
          v-model="formValues.password_confirm"
          label="Password confirm"
          name="password_confirm"
          placeholder="user password"
          type="password"
        />
        <ErrorMessage
          v-if="formErrors.password_confirm"
          :text="formErrors.password_confirm"
        />
      </div>
      <div class="new-user__div12">
        <Button text="Add user" />
      </div>
    </form>
  </div>
</template>

<script>
import LabelInput from "../components/LabelInput.vue";
import LabelPicklist from "../components/LabelPicklist.vue";
import Button from "../components/Button.vue";
import ErrorMessage from "../components/ErrorMessage.vue";
import { regexEmail } from "../data/regex";

const genderOptions = ["male", "female", "other"];

const initialValues = {
  first_name: "",
  last_name: "",
  gender: "",
  age: "",
  email: "",
  category_title: "",
  subcategory_title: "",
  subsubcategory_title: "",
  password: "",
  password_confirm: "",
  category_index: undefined,
  subcategory_index: undefined,
  subsubcategory_index: undefined,
};

export default {
  name: "NewUserView",
  components: {
    LabelInput,
    LabelPicklist,
    Button,
    ErrorMessage,
  },
  data() {
    return {
      formValues: initialValues,
      formErrors: {},
      genderOptions,
      isSubmit: false,
    };
  },

  methods: {
    validate(values) {
      const errors = {};

      if (!values.first_name) {
        errors.first_name = "First name is requered";
      }
      if (!values.last_name) {
        errors.last_name = "Last name is requered";
      }
      if (!values.gender) {
        errors.gender = "Gender is requered";
      }
      if (!values.age) {
        errors.age = "Age is requered";
      } else if (values.age < 18 || values.age > 65) {
        errors.age = "Age must be between 18 and 65";
      }
      if (!values.email) {
        errors.email = "Email is requered";
      } else if (!regexEmail.test(values.email)) {
        errors.email = "Email is not valid";
      }
      if (!values.category_title) {
        errors.category_title = "Category is requered";
      }
      if (!values.subcategory_title) {
        errors.subcategory_title = "Sub-category is required";
      }
      if (!values.subsubcategory_title) {
        errors.subsubcategory_title = "Sub-sub-category is required";
      }
      if (!values.password) {
        errors.password = "Password is requered";
      } else if (values.password !== values.password_confirm) {
        errors.password = "Passwords do not match";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }
      if (!values.password_confirm) {
        errors.password_confirm = "Password Confirm is requered";
      } else if (values.password !== values.password_confirm) {
        errors.password_confirm = "Passwords do not match";
      } else if (values.password.length < 8) {
        errors.password_confirm = "Password must be at least 8 characters long";
      }
      return errors;
    },

    handleSubmit() {
      this.formErrors = this.validate(this.formValues);
      this.isSubmit = true;
      if (Object.keys(this.formErrors).length === 0 && this.isSubmit) {
        alert(
          "user " +
            this.formValues.first_name +
            " " +
            this.formValues.last_name +
            " was added to " +
            this.formValues.category_title +
            " ➜ " +
            this.formValues.subcategory_title
        );
        this.addUser();
        this.formValues = initialValues;
      }
    },

    handleChange(event) {
      const { name, value } = event.target;
      this.formValues = { ...this.formValues, [name]: value };
      console.log(this.formValues);
      //not sure if 2 lines below should be seperate function "handlePicklistChange"
      //and be assigned only for picklist (performance reasons)
      this.formValues.category_index = this.$store.state.categories.findIndex(
        (category) => category.title === this.formValues.category_title
      );

      this.formValues.subcategory_index = this.$store.state.categories[
        this.formValues.category_index
      ].subcategories.findIndex(
        (x) => x.title === this.formValues.subcategory_title
      );

      this.formValues.subsubcategory_index = this.$store.state.categories[
        this.formValues.category_index
      ].subcategories[
        this.formValues.subcategory_index
      ].subsubcategories.findIndex(
        (x) => x.title === this.formValues.subsubcategory_title
      );
    },

    addUser() {
      this.$store.commit("addUser", this.formValues);
      this.formValues = initialValues;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/mixins";
@import "../scss/base/variables";

.new-user {
  @include page-layout;

  &__title {
    text-align: center;
  }

  &__form {
    box-shadow: $box-shadow-button;
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: repeat(10, auto);
    grid-column-gap: 16px;
    grid-row-gap: 20px;
    background-color: $form-background;
    border-radius: 16px;
    padding: 48px;
    width: 100%;
    max-width: 720px;

    @include media-query-tablet-and-down {
      padding: 36px 24px;
    }
  }

  &__div1 {
    grid-area: 1 / 1 / 2 / 9;
  }

  &__div2 {
    grid-area: 2 / 1 / 3 / 5;
  }

  &__div3 {
    grid-area: 2 / 5 / 3 / 9;
  }

  &__div4 {
    grid-area: 3 / 1 / 4 / 6;
  }

  &__div5 {
    grid-area: 3 / 6 / 4 / 9;
  }

  &__div6 {
    grid-area: 4 / 1 / 5 / 9;
  }

  &__div7 {
    grid-area: 5 / 1 / 6 / 9;
  }

  &__div8 {
    grid-area: 6 / 1 / 7 / 9;
  }

  &__div9 {
    grid-area: 7 / 1 / 8 / 9;
  }

  &__div10 {
    grid-area: 8 / 1 / 9 / 9;
  }

  &__div11 {
    grid-area: 9 / 1 / 10 / 9;
  }

  &__div12 {
    grid-area: 10 / 1 / 11 / 9;
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
}
</style>