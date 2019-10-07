<template>
    <section class="home">

        <app-content-box v-if="!animationPlayed">
            <app-welcome-animation></app-welcome-animation>
        </app-content-box>

        <app-content-box>
            <app-about></app-about>
        </app-content-box>

        <app-content-box>
            <app-skills></app-skills>
        </app-content-box>

    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import AboutVue from '../components/home/about/About.vue';
import SkillsVue from '../components/home/skills/Skills.vue';
import WelcomeAnimationVue from '../components/home/welcome-animation/WelcomeAnimation.vue';
import ContentBoxVue from '../components/home/content-box/ContentBox.vue';

export default Vue.extend({
    name: 'home',
    components: {
        appContentBox: ContentBoxVue,
        appAbout: AboutVue,
        appSkills: SkillsVue,
        appWelcomeAnimation: WelcomeAnimationVue,
    },
    computed: {
        ...mapGetters(['animationPlayed']),
    },
    methods: {
        ...mapActions(['animationHasBeenPlayed']),
    },
    created() {
        if (!this.animationPlayed) {
            setTimeout(() => {
                this.animationHasBeenPlayed();
            }, 16000);
        }
    },
});
</script>
