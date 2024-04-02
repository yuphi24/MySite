<script setup>
import { ref, watch } from "vue";
import w from "../data/works.json";
import Navbar from "./Navbar.vue";
import Card from "./WorksCard.vue";
import { CFormSelect } from "@coreui/bootstrap-vue";

const works = ref(w);
const selected = ref();

watch(selected, (newValue) => {
    if (newValue) {
        works.value = w.filter(work => work.tag.includes(newValue));
    } else {
        works.value = w;
    }
});

</script>

<template>
<div>
    <header>
        <Navbar />
    </header>
    <main>
        <section class="works">
            <div class="container">
                <div class="section-title">
                    <h2>Works</h2>
                </div>
                <div class="filter">
                    <span>Keyword: </span>
                    <CFormSelect size="sm" v-model="selected">
                        <option value="">All</option>
                        <option value="GIS">GIS</option>
                        <option value="Analysis">Analysis</option>
                        <option value="Research">Research</option>
                        <option value="HTML/CSS">HTML/CSS</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Vue.js">Vue.js</option>
                        <option value="R">R</option>
                        <option value="SQL">SQL</option>
                    </CFormSelect>
                </div>
                <div class="options-container">
                    <Card v-for="work in works" :key="work.id" :work="work"/>
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
/*--------------------------------------------------------------
# filter
--------------------------------------------------------------*/
.filter {
    padding-bottom: 15px;
    width: 80%;
    margin: auto;
}
/*--------------------------------------------------------------
# works container
--------------------------------------------------------------*/
.options-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    column-gap: 7.5px;
    list-style: none;
}
</style>

