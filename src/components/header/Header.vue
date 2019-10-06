<template>
<section id="header">
    <div class="header-inner">
        <div id="nav">
            <router-link 
                v-for="(navItem, i) in navItems" 
                :key="i" 
                :to="navItem.path">
                {{ navItem.name | uppercase }}
                </router-link>
        </div>
    </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { NavItem, HeaderData } from '@/models/header';

export default Vue.extend({
    data(): HeaderData {
        return {
            navItems: [
                { name: 'home', path: '/' },
                { name: 'portfolio', path: '/portfolio' },
            ],
        };
    },
});
</script>
