<script setup>
    import {defineProps} from "vue";
    import {useRouter} from "vue-router";
    import { CBadge } from "@coreui/bootstrap-vue";

    const router = useRouter();
    const {work} = defineProps(["work"]);

    const navigateToWork = () => {
      router.push(`/work/${work.id}`)
    };
</script>

<template>
    <div class="card" @click="navigateToWork">
        <img :src="work.img" alt="">
        <div class="card-text">
            <span>{{ work.date }}</span>
            <h3>{{ work.name }}</h3>
            <p>{{ work.description }}</p>
        </div>
        <div class="card-tags">
            <CBadge
              v-for="tag in work.tag"
              :key="tag" color="secondary"
              shape="rounded-pill"
              class="me-2"
            >
              {{ tag }}
            </CBadge>
        </div>
    </div>
</template>

<style>
.card {
    width: 310px;
    display: block;
    position: relative;
    overflow-wrap: break-word;
    hyphens: manual;
    border-radius: 2%;
    box-shadow: 0 0 5px rgba(0,0,0,.25);
    margin: 0 10px 35px 10px;
    padding: 0.7692307692% 0.7692307692% 0 0.7692307692%;
    cursor: pointer;
}
.card img {
    width: 100%;
    height: 200px;
    background-position: 50%;
    background-size: cover;
    border: solid #979797;
    border-radius: 5px 5px 0 0;
    opacity: 1;
    margin: 0 auto;
}
.card:hover {
    transform: scale(1.03);
}
.card .card-text {
    padding: 10px 15px 15px;
    position: relative;
    overflow-wrap: break-word;
}
.card .card-tags {
    padding: 0px 15px 15px 15px;
    position: relative;
}
.card .card-text h3 {
    color: #333333;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.2;
    white-space: normal;
    margin-bottom: 0.5rem;
}
.card .card-text p {
    display: block;
    margin: 0;
    font-size: 14px;
    color: #757575;
    line-height: 1.2;
    white-space: normal;
}
.card .card-text span {
    font-size: 10px;
    color: #757575;
}
</style>
