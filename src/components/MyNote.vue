<script setup>
import Navbar from "./Navbar.vue";
import { ref } from 'vue';
</script>

<template>
<div>
    <header>
        <Navbar />
    </header>
    <main>
        <section class="mynote">
            <div class="container">
                <div class="section-title">
                    <h2>MyNote</h2>
                </div>
                <div class="contents">
                    Hello hier is MyNote components
                </div>
            </div>
        </section>
    </main>
</div>
</template>

<style scoped>
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
main {
    padding-top: 30px;
}
section {
    padding: 60px 0;
}
.section-title {
    text-align: center;
    padding-bottom: 30px;
}
.section-title h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
}
.section-title h2::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: #34b7a7;
    bottom: 0;
    left: calc(50% - 25px);
}
.container {
    width: 100%;
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
}
@media (max-width: 767px) {
    .container {
        max-width: 540px;
    }
}
@media (min-width: 767px) {
    .container {
        max-width: 700px;
    }
}
</style>

