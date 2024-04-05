<template>
  <div class="spinner">
    <svg
      class="spinner-icon"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="spinner-path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="4"
      />
    </svg>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "src/assets/variables.scss";
.spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner-icon {
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
}

.spinner-path {
  stroke: $gray;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
