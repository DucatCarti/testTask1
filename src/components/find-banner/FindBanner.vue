<script setup lang="ts">
import { defineComponent } from "vue";
import FindBannerSidebar from "@/components/find-banner/FindBannerSidebar.vue";
import FindBannerBody from "@/components/find-banner/FindBannerBody.vue";

defineComponent({
  name: "FindBanner",
});
</script>

<template>
  <div class="banner">
    <find-banner-sidebar />
    <find-banner-body />
  </div>
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.banner {
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 10px 0 $gray-light;
}
</style>
