<template>
  <div v-if="!data.users || data.users.length === 0">
    <caption class="table__caption">
      {{
        data.title
      }}
    </caption>
    <ErrorMessage
      :text="'Sub-category \'' + data.title + '\' has no users'"
      size="medium"
    />
  </div>

  <table v-else class="table">
    <caption class="table__caption">
      {{
        data.title
      }}
    </caption>
    <thead>
      <tr class="table__row">
        <th
          class="table__headers"
          v-for="tableHeader in headers"
          :key="tableHeader"
        >
          {{ tableHeader }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in data.users" :key="user.first_name + user.last_name">
        <td v-for="key in Object.keys(user)" :key="user[key]">
          {{ user[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ErrorMessage from "../components/ErrorMessage.vue";
export default {
  props: {
    data: Object,
    headers: {
      type: Array,
      default() {
        return [
          "First name",
          "Last name",
          "Gender",
          "Age",
          "Email",
          "Password",
        ];
      },
    },
  },
  components: {
    ErrorMessage,
  },
};
</script>

<style lang="scss">
@import "../scss/base/variables";

.table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  &__caption {
    text-align: left;
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 800;
  }

  &__headers {
    font-weight: 600;
  }

  & td,
  & th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  & tbody > tr:nth-child(odd) {
    background-color: $color-accent-3;
  }
}
</style>