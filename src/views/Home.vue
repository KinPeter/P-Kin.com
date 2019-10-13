<template>
    <section class="home">
        <app-welcome-animation 
            v-if="!animationPlayed"
            @closeAnimation="onCloseAnimation">
        </app-welcome-animation>

        <transition name="cbox" appear tag="section" >
            <app-content-box v-if="animationPlayed">
                <app-about></app-about>
            </app-content-box>
        </transition>

        <transition name="cbox" appear tag="section" >
            <app-content-box v-if="animationPlayed">
                <app-skills></app-skills>
            </app-content-box>
        </transition>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import AboutVue from '../components/home/About.vue';
import SkillsVue from '../components/home/Skills.vue';
import WelcomeAnimationVue from '../components/home/WelcomeAnimation.vue';
import ContentBoxVue from '../components/content-box/ContentBox.vue';

export default Vue.extend({
    name: 'home',
    data() {
        return {
            animationCloseTimer: 0,
        };
    },
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
        onCloseAnimation(): void {
            this.animationHasBeenPlayed();
            clearTimeout(this.animationCloseTimer);
        },
    },
    created() {
        if (!this.animationPlayed) {
            this.animationCloseTimer = setTimeout(() => {
                this.animationHasBeenPlayed();
            }, 10000);
        }
    },
});
</script>

