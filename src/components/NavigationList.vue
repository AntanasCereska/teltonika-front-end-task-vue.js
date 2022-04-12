<template>
  <div class="expandable-list">
    <div class="expandable-list__wrapper">
      <span class="expandable-list__item">
        <a
          @click.prevent="handleToggleDropdown"
          class="expandable-list__item-title"
          href=""
        >
          <span>
            <span v-if="toggleDropdown && category.subcategories.length !== 0"
              >►
            </span>
            <span
              v-else-if="!toggleDropdown && category.subcategories.length !== 0"
              >▼
            </span>
            <span v-else>⊘ </span>
          </span>
          {{ category.title }}</a
        >
        <span class="expandable-list__action-buttons">
          <ButtonIcon
            iconType="trash"
            iconSize="lg"
            backgroundColor
            @btn-click="handleDeleteCategory(category.title)"
          />
          <ButtonIcon iconType="download" iconSize="lg" backgroundColor />
        </span>
      </span>
      <span
        :class="[
          'expandable-list__sub-item',
          toggleDropdown && 'expandable-list__sub-item--hidden',
        ]"
        v-for="subcategory in category.subcategories"
        :key="subcategory"
      >
        <router-link
          :to="{
            name: 'categories',
            params: {
              categoryId: category.title.replaceAll(' ', '_'),
              subcategoryId: subcategory.title.replaceAll(' ', '_'),
            },
          }"
          class="expandable-list__sub-item-title"
          >{{ subcategory.title }}</router-link
        >
        <span class="expandable-list__action-buttons">
          <ButtonIcon iconType="trash" iconSize="md" backgroundColor />
          <ButtonIcon iconType="download" iconSize="md" backgroundColor />
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "./ButtonIcon.vue";
export default {
  name: "NavigationList",
  props: {
    category: Object,
  },
  components: {
    ButtonIcon,
  },
  methods: {
    handleToggleDropdown() {
      this.toggleDropdown = !this.toggleDropdown;
    },
    handleDeleteCategory(categoryTitle) {
      if (confirm("Do you want to delete '" + categoryTitle + "' category?")) {
        this.$store.commit("deleteCategory", categoryTitle);
      }
    },
  },
  data() {
    return {
      toggleDropdown: false,
    };
  },
};
</script>

<style lang='scss' scoped>
@import "../scss/base/variables";

.expandable-list {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  &__item {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 24px;
  }

  &__item-title {
    color: #18191a;
    color: $color-text;
    text-decoration: none;
    cursor: pointer;
    font-weight: 600;
  }

  &__sub-item {
    color: $color-text;
    text-decoration: none;
    padding-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;

    &--hidden {
      display: none;
    }
  }

  &__sub-item-title {
    text-decoration: none;
    color: $color-text;
  }

  &__action-buttons {
    display: flex;
    gap: 0.4rem;
  }
}

.router-link-active {
  color: $color-primary;
}
</style>