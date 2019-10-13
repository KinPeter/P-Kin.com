<template>
    <section v-if="!isLoading">
        <app-portfolio-filters></app-portfolio-filters>
        <app-portfolio-grid></app-portfolio-grid>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PortfolioGridVue from '../components/portfolio/PortfolioGrid.vue';
import PortfolioFiltersVue from '../components/portfolio/PortfolioFilters.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['isLoading', 'portfolioLoaded']),
    },
    methods: {
        ...mapActions(['fetchPortfolioFilters', 'fetchPortfolioItems']),
    },
    components: {
        appPortfolioGrid: PortfolioGridVue,
        appPortfolioFilters: PortfolioFiltersVue,
    },
    created() {
        if (!this.portfolioLoaded) {
            this.fetchPortfolioFilters();
            this.fetchPortfolioItems();
        }
    },
});
</script>