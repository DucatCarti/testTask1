<script setup lang="ts">
import { computed, defineComponent } from "vue";
import DetailCard from "@/components/find-banner/body/DetailCard.vue";
import { useStore } from "vuex";

const store = useStore();
const selectedUser = computed(() => store.state.selectedUser);
</script>

<template>
  <div class="body">
    <detail-card v-if="selectedUser" :user="selectedUser" />
    <p v-else class="message">
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.body {
  display: flex;
  width: 100%;
  min-height: 100%;
  border-left: 1px solid $gray-light;
  padding: 30px 20px;
}
.message {
  align-self: center;
  margin: 0 auto;
  color: $gray;
  font-size: 14px;
  font-weight: 400;
}
</style>
