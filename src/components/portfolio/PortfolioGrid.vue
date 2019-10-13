<template>
    <section id="portfolio-grid">
        <app-portfolio-item
            v-for="(item, i) in filteredPortfolio"
            :key="i"
            :portfolioItem="item">
        </app-portfolio-item>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import PortfolioItemVue from './PortfolioItem.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['filteredPortfolio']),
    },
    components: {
        appPortfolioItem: PortfolioItemVue,
    },
});
</script>

<style lang="scss">
@import '../../scss/_variables';

section#portfolio-grid {
    width: 100%;
    display: block;
    @media (min-width: $sm) {
        margin-top: 175px;
    }
    @media (min-width: $md) {
        margin-top: 145px;
    }
    @media (min-width: $lg) {
        display: grid;
        grid-gap: 1rem 2rem;
        grid-template-columns: repeat(2, calc(50% - 1rem));
    }
    @media (min-width: $xl) {
        margin-top: 105px;
    }
}
</style>