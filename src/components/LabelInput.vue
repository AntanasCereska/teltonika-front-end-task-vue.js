<template>
  <div class="label-input">
    <label htmlFor="{htmlFor}" class="label-input__label">
      {{ label }}
    </label>
    <span class="label-input__label-icon-wrapper">
      <input
        class="label-input__input"
        :disabled="isDisabled"
        :placeholder="placeholder"
        :type="showPassword"
        :value="value"
        :name="name"
        @keyup="onKeyUp"
      />
      <i class="label-input__icon"
        ><ButtonIcon
          v-if="type === 'password'"
          :iconType="this.showPassword == 'password' ? 'eye' : 'eye-slash'"
          iconSize="md"
          @click="setShowPassword"
      /></i>
    </span>
  </div>
</template>

<script>
import ButtonIcon from "../components/ButtonIcon.vue";
export default {
  props: {
    label: String,
    placeholder: String,
    name: String,
    type: String,
    isDisabled: Boolean,
    value: String,
  },
  components: {
    ButtonIcon,
  },
  data() {
    return {
      showPassword: this.type,
    };
  },
  methods: {
    onKeyUp(event) {
      this.$emit("change", event);
    },
    setShowPassword() {
      this.showPassword =
        (this.showPassword === "password" && "text") || "password";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/base/variables";

.label-input {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  &__label-icon-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
  }

  &__label {
    font-weight: 500;
  }

  &__input {
    box-shadow: $box-shadow-picklist;
    border-radius: 8px;
    width: 100%;
    border: none;
    padding: 8px 12px;
    height: 100%;
    margin: 2px 0;

    &:disabled {
      background-color: $color-accent-3;
      cursor: not-allowed;

      &::placeholder {
        color: $color-text-disabled;
      }
    }

    &:focus {
      outline: 1px solid $color-primary;
    }
  }

  &__icon {
    position: absolute;
    right: 8px;
  }
}
</style>