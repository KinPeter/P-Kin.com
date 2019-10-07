<template>
    <section class="home">
        <transition-group name="list" appear tag="div" >
            <app-content-box v-if="!animationPlayed" key="box01">
                <app-welcome-animation></app-welcome-animation>
            </app-content-box>

            <app-content-box key="box02">
                <app-about></app-about>
            </app-content-box>

            <app-content-box key="box03">
                <app-skills></app-skills>
            </app-content-box>
        </transition-group>
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

<style lang="scss">
.list-enter-active, .list-leave-active, .list-move {
    transition: all .5s ease;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    &:after {
       opacity: 0;
    }
}
.list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(10px);
}
.list-leave-active {
    position: absolute;
}
</style>