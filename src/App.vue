<script setup lang="ts">
import { defineComponent } from "vue";
import FindBanner from "@/components/find-banner/FindBanner.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

defineComponent({
  name: "App",
  components: { FindBanner },
});
</script>

<template>
  <div class="container">
    <header-component />
    <find-banner />
  </div>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin: 20px auto;
}
</style>
