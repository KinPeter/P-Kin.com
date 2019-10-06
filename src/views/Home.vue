<template>
    <section class="home">
        <h3>This is the home page</h3>
        <i class="icon-p-logo"></i>
        <app-welcome-animation></app-welcome-animation>
        <app-about></app-about>
        <app-skills></app-skills>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import AboutVue from '../components/home/about/About.vue';
import SkillsVue from '../components/home/skills/Skills.vue';
import WelcomeAnimationVue from '../components/home/welcome-animation/WelcomeAnimation.vue';

export default Vue.extend({
    name: 'home',
    components: {
        appAbout: AboutVue,
        appSkills: SkillsVue,
        appWelcomeAnimation: WelcomeAnimationVue,
    },
});
</script>
