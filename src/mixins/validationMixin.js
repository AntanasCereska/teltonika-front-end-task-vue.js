import { regexEmail } from "../data/regex";
import store from "../store";
const validationMixin = {
  data: () => ({
    validationRules: {
      first_name: {
        rules: [
          (value) => value.length !== 0 || "First name is required",
          (value) =>
            value.length > 3 || "First name must be at least 3 characters long",
        ],
      },
      last_name: {
        rules: [(value) => value.length !== 0 || "Last name is required"],
      },
      gender: {
        rules: [(value) => value.length !== 0 || "Gender is requered"],
      },
      age: {
        rules: [
          (value) =>
            (value > 18 && value < 65) || "Age must be between 18 and 65",
        ],
      },
      email: {
        rules: [
          (value) => value !== 0 || "Email is required",
          (value) => regexEmail.test(value) || "Email is not valid",
        ],
      },
      category_title: {
        rules: [
          (value) => value.length !== 0 || "Category title is required",
          (value) =>
            !store.state.categories.some((cat) => cat.title === value) ||
            "Category with this title already exists",
        ],
      },
      subcategory_title: {
        rules: [(value) => !value || "Sub-category title is required"],
      },
      subsubcategory_title: {
        rules: [(value) => !value || "Sub-sub-category title is required"],
      },
      password: {
        rules: [
          (value) =>
            value.length > 8 || "Password must be at least 8 characters long",
        ],
      },
      confirm_password: {
        rules: [
          (value) =>
            value.length > 8 || "Password must be at least 8 characters long",
        ],
      },
    },
  }),
  methods: {
    validateField(inputName, value) {
      return this.validationRules[inputName].rules
        .filter((rule) => {
          const isValid = rule(value);
          if (isValid !== true) {
            return isValid;
          }
        })
        .map((rule) => rule(value));
    },
    validateForm(form) {
      const formErrors = {};
      let formIsValid = true;

      for (let property in form) {
        const errors = this.validateField(property, form[property]);

        if (errors.length) {
          formIsValid = false;
        }
        formErrors[property] = errors;
      }

      formErrors.formIsValid = formIsValid;
      return formErrors;
    },
  },
};

export default validationMixin;
