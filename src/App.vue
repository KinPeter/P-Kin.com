<template>
    <div>
        <app-header></app-header>
        <router-view/>
        <app-footer></app-footer>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import HeaderVue from './components/header/Header.vue';
import FooterVue from './components/footer/Footer.vue';

export default Vue.extend({
    methods: {
        ...mapActions(['fetchSkills']),
    },
    components: {
        appHeader: HeaderVue,
        appFooter: FooterVue,
    },
    created() {
        this.fetchSkills();
    },
});
</script>

<style lang="scss">
@import 'scss/app';
</style>
