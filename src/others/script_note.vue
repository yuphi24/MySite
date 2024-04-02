<script setup>
// das muss man in eltern-components schreiben
// const services = ref([
//   {
//     title: "",
//     link: "#"
//   },
//   {
//     title: "aboutme",
//     link: "#"
//   },
//   {
//     title: "works",
//     link: "#"
//   }
// ]);
// das im template im eltern-components
// <Dropdown title="Works" :items="services" />

import { ref, defineProps } from 'vue';

const props = defineProps({
  title: String,
  items: Array
});

const isOpen = ref(false);
</script>

<template>
<div @click="isOpen = !isOpen" class="menu-item">
    <a href="#">
        {{ title }}
    </a>
    <Transition name="fade">
        <div v-if="isOpen" class="sub-menu">
            <div v-for="(item, i) in items" :key="i" class="menu-item">
                <a :href="item.link">{{ item.title }}</a>
            </div>
        </div>
    </Transition>
</div>
</template>

<style>
nav .menu-item .sub-menu {
    position: absolute;
    background-color: #222;
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    border-radius: 0px 0px 16px 16px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>