'use strict';

import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/About',
            name: 'About',
            component: About
        },
    ]
})