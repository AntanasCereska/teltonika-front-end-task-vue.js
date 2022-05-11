<template>
  <div>Test</div>
  <form>
    {{ formErrors }}
    {{ formValues }}
    <div class="input">
      <label for="firstname">firstname</label>
      <input
        type="text"
        name="firstname"
        v-model="formValues.first_name"
        @change="onInputChange($event, 'first_name')"
      />
      <span v-for="(error, index) in formErrors.first_name" :key="index">
        {{ error }}
      </span>
    </div>
    <div class="input">
      <label for="lastname">lastname</label>
      <input
        type="text"
        name="lastname"
        v-model="formValues.last_name"
        @change="onInputChange($event, 'last_name')"
      />
      <span v-for="(error, index) in formErrors.last_name" :key="index">
        {{ error }}
      </span>
    </div>
    <div class="input">
      <label for="password">password</label>
      <input
        type="text"
        name="password"
        v-model="formValues.password"
        @change="onInputChange($event, 'password')"
      />
    </div>
    <span v-for="(error, index) in formErrors.password" :key="index">
      {{ error }}
    </span>
    <div class="input">
      <label for="password">email</label>
      <input
        type="text"
        name="email"
        v-model="formValues.email"
        @change="onInputChange($event, 'email')"
      />
    </div>
    <span v-for="(error, index) in formErrors.email" :key="index">
      {{ error }}
    </span>
    <div class="input">
      <label for="age">age</label>
      <input
        type="number"
        name="age"
        v-model="formValues.age"
        @change="onInputChange($event, 'age')"
      />
    </div>
    <span v-for="(error, index) in formErrors.age" :key="index">
      {{ error }}
    </span>
    <div class="input">
      <label for="category_title">category_title</label>
      <input
        type="text"
        name="category_title"
        v-model="formValues.category_title"
        @change="onInputChange($event, 'category_title')"
      />
    </div>
    <span v-for="(error, index) in formErrors.category_title" :key="index">
      <ErrorMessage :text="error" />
    </span>
    <button type="submit" :disabled="!isFormValid">create</button>
  </form>
</template>

<script>
import ErrorMessage from "../components/ErrorMessage.vue";
import validationMixin from "../mixins/validationMixin";
export default {
  name: "TestView",
  components: {
    ErrorMessage,
  },
  data: () => ({
    formValues: {
      first_name: "",
      last_name: "",
      password: "",
      email: "",
      age: "",
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
      const inputValue = event.target.value;
      const inputErrors = this.validateField(inputName, inputValue);
      if (inputErrors && inputErrors.length) {
        this.formErrors[inputName] = inputErrors;
      } else {
        this.formErrors[inputName] = null;
      }
    },
  },
  mixins: [validationMixin],
};
</script>

<style>
</style>