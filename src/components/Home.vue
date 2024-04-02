<script setup>
import Navbar from "./Navbar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const navigateToAboutMe = () => {
  router.push(`/about/`)
}
const navigateToWorks = () => {
  router.push(`/works/`)
}
const navigateToResume = () => {
  router.push(`/resume/`)
}
</script>

<template>
<body>
    <header>
        <Navbar />
    </header>
    <main>
        <section class="home">
            <div class="container">
                <h1>Welcome</h1>
                <h2>Hi, I am Yui Takahashi</h2>
                <a @click="navigateToAboutMe" class="btn-about">About Me</a>
                <a @click="navigateToWorks" class="btn-about">Works</a>
                <a @click="navigateToResume" class="btn-about">Resume</a>
            </div>
        </section>
    </main>
</body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  position: fixed;
  width: 100vw;
  background-color: #e9e8e6;
  box-shadow: 0px 0px 25px 0 rgba(0, 0, 0, 0.08);
  z-index: 997;
  padding: 15px 0;
}
</style>

<style scoped>
section {
    padding: 60px 0;
    width: 100vw;
    height: 100vh;
    background: url("../assets/homeBackground.jpg") top right;
    background-size: cover;
    align-items: center;
    display: flex;
}
section {
    background-attachment: fixed;
}
section:before {
      content: "";
      padding: 60px 0;
      background: rgba(255, 255, 255, 0.8);
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
}
section .container {
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    position: relative;
    align-items: center;
}
section h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    color: #222222;
}
section h2 {
    color: #6f6f6f;
    margin: 10px 0 0 0;
    font-size: 18px;
    line-height: 24px;
}
section .btn-about {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    transition: 0.5s;
    margin-top: 30px;
    color: #fff;
    background: #34b7a7;
    text-decoration: none;
    cursor: pointer;
  }
section .btn-about:hover {
    background: #3dc8b7;
}
</style>

