<script setup lang="ts">
import { PropType, defineProps, computed } from "vue";
import { User } from "@/types/types";
import { useStore } from "vuex";

const props = defineProps({
  user: {
    type: Object as PropType<User>,
  },
});
const store = useStore();
const selectedUser = computed(() => {
  return store.state.selectedUser;
});
</script>
<template>
  <div class="card">
    <div class="card-image">
      <img class="card-image__item" src="/avatar.svg" alt="" />
    </div>
    <div
      class="card-info"
      :class="{ selected: props.user?.id === selectedUser?.id }"
    >
      <p class="card-info__name">{{ props.user.name }}</p>
      <p class="card-info__mail">{{ props.user.email }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.card {
  cursor: pointer;
  min-height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid $gray-light;
  border-radius: 15px;
  overflow: hidden;

  &-image {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    width: 100px;
    max-height: 80px;
    height: auto;
    &__item {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
  &-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 100%;
    border-left: 2px solid $gray-light;
    padding: 10px 20px;
    text-align: left;
    &__name {
      font-size: 14px;
      font-weight: 600;
    }
    &__email {
      font-weight: 400;
      color: $gray;
    }
  }
}
.selected {
  background-color: $gray-light-extra;
}
</style>
