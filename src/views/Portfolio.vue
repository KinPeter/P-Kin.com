<template>
    <section>
        <h3>This is the Portfolio Page</h3>
        <app-portfolio-filters></app-portfolio-filters>
        <app-portfolio-grid></app-portfolio-grid>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioGridVue from '../components/portfolio/PortfolioGrid.vue';
import PortfolioFiltersVue from '../components/portfolio/PortfolioFilters.vue';

export default Vue.extend({
    components: {
        appPortfolioGrid: PortfolioGridVue,
        appPortfolioFilters: PortfolioFiltersVue,
    },
});
</script>