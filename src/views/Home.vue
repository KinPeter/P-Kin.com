<template>
    <section class="home">
        <h3>This is the home page</h3>
        <img alt="Vue logo" src="../assets/images/stack-logos/vue.png" />
        <app-about></app-about>
        <app-skills></app-skills>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import AboutVue from '../components/home/about/About.vue';
import SkillsVue from '../components/home/skills/Skills.vue';

export default Vue.extend({
    name: 'home',
    components: {
        appAbout: AboutVue,
        appSkills: SkillsVue,
    },
});
</script>
