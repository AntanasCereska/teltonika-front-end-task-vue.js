<template>
  <div class="label-picklist">
    <label class="label-picklist__label">{{ label }}</label>
    <select
      @change="onChange"
      :disabled="!options || (options.length === 0 && true)"
      :name="name"
      class="label-picklist__select"
    >
      <option :style="{ background: none }">
        -- select {{ name.replaceAll("_", " ") }} --
      </option>
      <option v-for="option in options" :key="option">
        {{ option.title || option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LabelPicklist",
  props: {
    options: Array,
    selected: String,
    name: String,
    value: String,
    label: String,
  },
  methods: {
    onChange(event) {
      this.$emit("change", event);
    },
  },
};
</script>

<style lang="scss">
@import "../scss/base/variables";

.label-picklist {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4px;

  &__label {
    font-weight: 500;
  }

  &__select {
    box-shadow: $box-shadow-picklist;
    border-radius: 8px;
    width: 100%;
    border: none;
    padding: 8px 12px;
    border-right: 16px solid transparent;
    background-color: $color-white;
    height: 100%;
    margin: 2px 0;

    &:focus {
      outline: 1px solid $color-primary;
    }
  }
}
</style>