<script setup>
  import {RouterView} from "vue-router";
</script>

<template>
  <body>
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </RouterView>
  </body>
</template>

<style>
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'montserrat', sans-serif;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
