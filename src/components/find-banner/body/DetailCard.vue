<script setup lang="ts">
import { PropType, defineProps } from "vue";
import { User } from "@/types/types";

const props = defineProps({
  user: {
    type: Object as PropType<User>,
  },
});
console.log(props?.user);
</script>

<template>
  <div class="card">
    <div class="card__image">
      <img class="card__image-item" src="/avatar.svg" alt="" />
    </div>
    <div class="card-info">
      <p class="card-info__name">{{ props.user.name }}</p>
      <p class="card-info__row">
        email: <span>{{ props.user.email }}</span>
      </p>
      <p class="card-info__row">
        phone: <span> {{ props.user.phone }}</span>
      </p>
      <div class="card-info__about">
        <h3>О себе</h3>
        <p>
          {{ props.user.website }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";
.card {
  display: flex;
  flex-direction: row;
  gap: 40px;
  &__image {
    min-width: 300px;
    height: 200px;
    &-item {
      height: 100%;
      width: auto;
      object-fit: cover;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    &__name {
      font-size: 16px;
      font-weight: 600;
    }
    &__row {
      font-size: 14px;
      font-weight: 600;
      span {
        font-weight: 400;
        color: $gray;
      }
    }
    &__about {
      h3 {
        font-size: 16px;
        font-weight: 600;
        margin: 10px 0 10px 0;
      }
      p {
        font-size: 14px;
        font-weight: 400;
        color: $gray;
      }
    }
  }
}
</style>
