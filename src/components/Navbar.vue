<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToHome = () => {
  router.push(`/`)
}
const navigateToAboutMe = () => {
  router.push(`/about/`)
}
const navigateToWorks = () => {
  router.push(`/works/`)
}
const navigateToResume = () => {
  router.push(`/resume/`)
}
// const navigateToMyNote = () => {
//   router.push(`/mynote/`)
// }

</script>

<template>
  <div class="container-top">
    <h1 class="logo" @click="navigateToHome">Yui Takahashi</h1>
    <nav>
      <ul class="menu-items">
        <li class="menu-item" @click="navigateToAboutMe">About Me</li>
        <li class="menu-item" @click="navigateToWorks">Works</li>
        <li class="menu-item" @click="navigateToResume">Resume</li>
        <!-- <li class="menu-item" @click="navigateToMyNote">MyNote</li> -->
        <a href="#"><fa :icon="['fab', 'x-twitter']" class="icon"/></a>
        <a href="#"><fa :icon="['fab', 'facebook']" class="icon"/></a>
        <a href="https://www.linkedin.com/in/yui-takahashi-773750295/"><fa :icon="['fab', 'linkedin']" class="icon"/></a>
        <a href="https://github.com/yuphi24"><fa :icon="['fab', 'github']" class="icon"/></a>
      </ul>
  </nav>
  </div>
</template>

<style scoped>
.container-top {
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * .5);
  padding-left: calc(var(--bs-gutter-x) * .5);
}
h1 {
  font-family: "Raleway", sans-serif;
}
.logo {
  font-size: 28px;
  color: #222222;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-right: auto;
}
.logo:hover {
  cursor: pointer;
}
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item,
nav .icon {
  color: #6f6f6f;
  position: relative;
  text-align: center;
  transition: 0.4s;
  display: inline-block;
}
nav .menu-item {
  margin-right: 30px;
}
nav .icon {
  margin-right: 10px;
}
nav .menu-item.active,
nav .menu-item:hover,
nav .icon:hover {
    color: #34b7a7;
    cursor: pointer;
}
nav .menu-items {
  list-style: none;
  margin-bottom: 0;
}
</style>