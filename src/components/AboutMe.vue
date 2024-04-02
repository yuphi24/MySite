<script setup>
import Navbar from "./Navbar.vue";
</script>

<template>
<body>
    <header>
        <Navbar />
    </header>
    <main>
        <section class="about">
            <div class="container">
                <div class="section-title">
                    <h2>About Me</h2>
                </div>
                <div class="contents">
                    <div class="general">
                        <img src="../assets/myPhoto.jpg" alt="Avatar">
                        <div class="aboutMe">
                            <p><fa icon="briefcase" class="icon"/><div class="professions">Graduate Student<br>Data Scientist as SHK</div></p>
                            <p><fa icon="house" class="icon"/>Dresden, DE</p>
                            <p><fa icon="envelope" class="icon"/>yui.takahashi.198 [at] gmail.com</p>
                            <!-- <p><fa icon="phone" class="icon"/>phone number</p> -->
                        </div>
                    </div>
                    <div class="skills">
                        <hr>
                        <h2>Skills</h2>
                        <!-- Tools & Software -->
                        <p class="subheading"><fa icon="wrench" class="icon"/>Tools and Software</p>
                        <p class="item">QGIS</p>
                        <div class="bar">
                            <div class="bar-fill" style="height:13px;width:80%">80%</div>
                        </div>
                        <ul class="description">
                            <li>visualizing geospatial data</li>
                            <li>analyzing geospatial data</li>
                        </ul>
                        <p class="item">ArcGIS</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:80%">80%</div>
                        </div>
                        <ul class="description">
                            <li>creating interactive visualizations for geospatial data</li>
                            <li>developing GIS-based web applications</li>
                        </ul>
                        <p class="item">PostgreSQL / DBeaver</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:70%">70%</div>
                        </div>
                        <br>
                        <!-- Programming -->
                        <p class="subheading"><fa icon="laptop-code" class="icon"/>Programming</p>
                        <p class="item">HTML5 / CSS3</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:80%">80%</div>
                        </div>
                        <p class="item">JavaScript (node.js)</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:60%">60%</div>
                        </div>
                        <ul class="description">
                            <li>building simple web applications with Vue.js</li>
                        </ul>
                        <p class="item">SQL</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:70%">70%</div>
                        </div>
                        <ul class="description">
                            <li>analyzing and managing data</li>
                            <li>writing complex queries</li>
                        </ul>
                        <p class="item">R</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:70%">70%</div>
                        </div>
                        <ul class="description">
                            <li>Data analysis and visualization</li>
                        </ul>
                        <p class="item">Python</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:15%">15%</div>
                        </div>
                        <ul class="description">
                            <li>Data conversion</li>
                        </ul>
                        <br>
                        <!-- Language -->
                        <p class="subheading"><fa icon="globe" class="icon"/>Languages</p>
                        <p class="item">Japanese</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:100%">native</div>
                        </div>
                        <p class="item">English</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:66.6666%">B2</div>
                        </div>
                        <p class="item">German</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:83.3333%">C1</div>
                        </div>
                        <p class="item">French</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:16.6666%">A1</div>
                        </div>
                        <p class="item">Russian</p>
                        <div class="bar">
                            <div class="bar-fill" style="width:16.6666%">A1</div>
                        </div>
                        <br>
                    </div>
                    <div class="award">
                        <hr>
                        <h2>Awards and Honors</h2>
                        <p>DAAD Scholorship Master Studies for All Academic Disciplines (10/2021 - 03/2024)</p>
                    </div>
                    <div class="hobby">
                        <hr>
                        <h2>Hobbies</h2>
                        <p>Electric Bass, Drums, Euphonium, Jogging, Swimming, Winter sports, Traveling</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>
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
# Contents
--------------------------------------------------------------*/
.contents {
    color: #757575;
    padding: 0 8px;
}
.contents img {
    width: 50%;
    height: auto;
}
.general {
    display: flex;
}
.aboutMe {
    padding-left: 16px;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
}
@media (min-width: 767px) {
    .aboutMe {
        font-size: 20px;
    }
}
/* Skills */
.skills {
    padding-top: 20px;

}
.skills h2 {
    margin-top: 20px;
}
.skills .item {
    font-size: 20px;
    font-weight: 600;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.icon {
    color: #009688;
    margin-right: 16px;
    font-size: 18px;
}
.professions {
    display: inline-block;
    vertical-align: middle;
}
.subheading {
    font-weight: bold;
    font-size: 20px;
}
.bar {
    color: #000;
    background-color: #f1f1f1;
    font-size: 12px;
    border-radius: 16px;
}
.bar-fill {
    height:13px;
    color: transparent;
    background-color: #009688;
    text-align: center;
    text-align: 0.01em 16px;
    border-radius: 16px;
}
.description {
    font-size: 16px;
    padding: 0 8px;
    list-style-type: "- ";
    margin-top: 16px;
}
/* award */
.award h2 {
    margin-top: 20px;
}
/* hobby */
.hobby h2 {
    margin-top: 20px;
}
</style>