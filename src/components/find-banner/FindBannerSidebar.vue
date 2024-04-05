<script setup lang="ts">
import { computed, ref, watch } from "vue";
import InputComponent from "@/components/ui/InputComponent.vue";
import DetailCardMini from "@/components/find-banner/sidebar/DetailCardMini.vue";
import { useStore } from "vuex";
import { useDebounce } from "@/helpers/useDebounce";
import { User } from "@/types/types";
import Spinner from "@/components/ui/SpinnerComponent.vue";
import SpinnerComponent from "@/components/ui/SpinnerComponent.vue";

const findValue = ref<string>("");

const findRequest = computed(() => {
  const value = findValue.value;
  if (value.includes(",")) {
    const values = value.split(",").map((val) => val.trim());
    return values.map((val) => `id=${val}`).join("&");
  } else {
    const digitsOnly = /^\d+$/.test(value);
    const lettersAndDigits = /^[a-zA-Z0-9]+$/.test(value);
    if (digitsOnly && value) {
      return `id=${value}`;
    } else if (lettersAndDigits) {
      return `name=${value}`;
    } else {
      return "";
    }
  }
});

watch(
  () => findValue.value,
  () => {
    debounce();
  }
);
const debounce = useDebounce(() => {
  findUsers();
}, 300);

const store = useStore();
const users = computed(() => store.state.users);
const isLoading = computed(() => {
  return store.state.isLoadingUsers;
});
const findStatus = computed(() => {
  return store.state.findStatus;
});
const findUserError = computed(() => {
  return store.state.findUserError;
});

const findUsers = () => {
  store.dispatch("findUsers", findRequest.value);
};

const selectedUser = (user: User) => {
  store.dispatch("selectedUser", user);
};
</script>

<template>
  <div class="sidebar">
    <div class="find">
      <p class="find__title">Поиск сотрудников</p>
      <input-component placeholder="Имя или Id" v-model:value="findValue" />
    </div>
    <div class="result">
      <div class="result__title">Результаты</div>
      <spinner-component v-if="isLoading" />
      <div class="result__list" v-else-if="users.length">
        <detail-card-mini
          @click="selectedUser(user)"
          v-for="user in users"
          :user="user"
          :key="user.id"
        />
      </div>
      <p class="result__error" v-else-if="findUserError">
        {{ findUserError }}
      </p>
      <p v-else class="result__status">
        {{ findStatus }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.result {
  position: relative;
  height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  &__error {
    color: darkred;
  }
  &__status {
    font-size: 14px;
    font-weight: 400;
    color: $gray;
  }
  &__list {
    height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  &__title {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    padding-top: 10px;
    padding-bottom: 20px;
  }
}
.find {
  min-width: 300px;
  &__title {
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    padding-bottom: 15px;
  }
}
.sidebar {
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: $gray-light-extra;
}
</style>
