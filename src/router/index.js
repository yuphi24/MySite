// define our routing rules
import {createRouter, createWebHistory} from "vue-router";
import Home from "../components/Home.vue";
import AboutMe from "../components/AboutMe.vue";
import Works from "../components/Works.vue";
import Resume from "../components/Resume.vue";
import MyNote from "../components/MyNote.vue";
import Work from "../components/WorkView.vue";
import NotFoundView from "../components/404View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/home",
            redirect: "/"
        },
        {
            path: "/about",
            name: "aboutme",
            component: AboutMe
        },
        {
            path: "/works",
            name: "works",
            component: Works
        },
        {
            path: "/resume",
            name: "resume",
            component: Resume
        },
        {
            path: "/mynote",
            name: "mynote",
            component: MyNote
        },
        {
            path: "/work/:id",
            name: "work",
            component: Work
        },
        {
            path: "/:catchall(.*)*",
            name: "Not Found",
            component: NotFoundView
        }
    ]
})

export default router