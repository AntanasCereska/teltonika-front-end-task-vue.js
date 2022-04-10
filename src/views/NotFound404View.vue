<template>
  <div class="not-found-404">
    <span class="not-found-404__text">
      4<span class="not-found-404__text-o">O</span>4
    </span>
    <img
      class="not-found-404__image"
      :src="travolta_confused"
      alt="background"
    />
  </div>
</template>

<script>
import travolta_confused from "./../assets/other/travolta_confused.gif";
export default {
  name: "NotFound404View",
  data() {
    return {
      travolta_confused,
    };
  },
};
</script>

<style lang="scss">
@import "../scss/base/mixins";

.not-found-404 {
  @include page-layout;

  &__image {
    margin-top: 172px;
    width: 280px;
    border-radius: 60px;

    @include media-query-tablet-and-down {
      margin-top: 120px;
      width: 150px;
    }

    @include media-query-phone {
      margin-top: 105px;
      width: 130px;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 300px;
    font-weight: 600;
    position: absolute;

    @include media-query-tablet-and-down {
      font-size: 180px;
    }
    @include media-query-phone {
      font-size: 48px;
    }
  }
  &__text-o {
    font-size: 500px;
    font-weight: 400;

    @include media-query-tablet-and-down {
      font-size: 300px;
    }
    @include media-query-phone {
      font-size: 260px;
    }
  }
}
</style>