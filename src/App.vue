<template>
    <div class="site-container">
        <app-header></app-header>
        <main class="router-view">
            <router-view/>
        </main>
        <app-footer></app-footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import HeaderVue from './components/header/Header.vue';
import FooterVue from './components/footer/Footer.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['scrolledHeader']),
    },
    methods: {
        ...mapActions(['fetchSkills', 'headerScrolledDown', 'headerScrolledToTop']),
        onScroll(): void {
            if (window.scrollY >= 150 && !this.scrolledHeader) {
                this.headerScrolledDown();
            } else if (window.scrollY < 150 && this.scrolledHeader) {
                this.headerScrolledToTop();
            }
        },
    },
    components: {
        appHeader: HeaderVue,
        appFooter: FooterVue,
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
        // this.fetchSkills();
    },
});
</script>

<style lang="scss">
@import 'scss/app';
</style>
