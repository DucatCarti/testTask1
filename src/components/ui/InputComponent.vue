<script setup lang="ts">
import { defineComponent, PropType, defineProps } from "vue";
const props = defineProps({
  value: {
    type: String as PropType<string>,
  },
  type: {
    type: String as PropType<string>,
    default: "text",
  },
  placeholder: {
    type: String as PropType<string>,
  },
});
defineComponent({
  name: "InputComponent",
});
</script>

<template>
  <input
    class="input"
    @input="$emit('update:value', $event.target.value)"
    :value="value"
    :type="props.type"
    :placeholder="placeholder"
  />
</template>

<style lang="scss" scoped>
@import "src/assets/variables";

.input {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid $gray-light;
  border-radius: 10px;
  &:focus {
    border: 2px solid $gray-light;
  }
}
</style>
