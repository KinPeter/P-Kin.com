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
import AboutVue from '../components/home/about/About.vue';
import SkillsVue from '../components/home/skills/Skills.vue';
import WelcomeAnimationVue from '../components/home/welcome-animation/WelcomeAnimation.vue';
import ContentBoxVue from '../components/home/content-box/ContentBox.vue';

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

<style lang="scss">
.cbox-enter-active, .cbox-leave-active {
    transition: all .5s ease;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    &:after {
       opacity: 0;
    }
}
.cbox-enter, .cbox-leave-to {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
}
</style>