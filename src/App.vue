<template>
    <div class="site-container">
        <app-spinner v-if="isLoading"></app-spinner>
        <transition name="error-dialog">
            <app-error-dialog v-if="hasError"></app-error-dialog>
        </transition>
        <transition name="error-dialog">
            <app-error-dialog v-if="hasDeprecationError" :deprecation="true"></app-error-dialog>
        </transition>

        <app-header></app-header>

        <transition name="side-blur-out">
            <app-side-drawer v-if="sideDrawerOpen"></app-side-drawer>
        </transition>

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
import SideDrawerVue from './components/side-drawer/SideDrawer.vue';
import SpinnerVue from './components/spinner/Spinner.vue';
import ErrorDialogVue from './components/error-dialog/ErrorDialog.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['scrolledHeader', 'sideDrawerOpen', 'isLoading', 'hasError', 'hasDeprecationError', 'skillsLoaded']),
    },
    methods: {
        ...mapActions(['fetchSkills', 'fetchOtherTechs', 'headerScrolledDown', 'headerScrolledToTop']),
        onScroll(): void {
            if (window.scrollY >= 100 && !this.scrolledHeader) {
                this.headerScrolledDown();
            } else if (window.scrollY < 100 && this.scrolledHeader) {
                this.headerScrolledToTop();
            }
        },
    },
    components: {
        appHeader: HeaderVue,
        appFooter: FooterVue,
        appSideDrawer: SideDrawerVue,
        appSpinner: SpinnerVue,
        appErrorDialog: ErrorDialogVue,
    },
    created() {
        window.addEventListener('scroll', this.onScroll);
        if (!this.skillsLoaded) {
            this.fetchSkills();
            this.fetchOtherTechs();
        }
    },
});
</script>

<style lang="scss">
@import 'scss/app';
</style>
