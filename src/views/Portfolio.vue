<template>
    <section v-if="!isLoading">
        <app-mobile-info 
            v-if="isOnMobile && showInfo" 
            @closeInfo="showInfo = false">
        </app-mobile-info>
        <app-portfolio-filters></app-portfolio-filters>
        <app-portfolio-grid></app-portfolio-grid>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PortfolioGridVue from '../components/portfolio/PortfolioGrid.vue';
import PortfolioMobileInfoVue from '../components/portfolio/PortfolioMobileInfo.vue';
import PortfolioFiltersVue from '../components/portfolio/PortfolioFilters.vue';

export default Vue.extend({
    data() {
        return {
            showInfo: true,
        };
    },
    computed: {
        ...mapGetters(['isOnMobile', 'isLoading', 'portfolioLoaded']),
    },
    methods: {
        ...mapActions(['fetchPortfolioFilters', 'fetchPortfolioItems']),
    },
    components: {
        appPortfolioGrid: PortfolioGridVue,
        appPortfolioFilters: PortfolioFiltersVue,
        appMobileInfo: PortfolioMobileInfoVue,
    },
    created() {
        if (!this.portfolioLoaded) {
            this.fetchPortfolioFilters();
            this.fetchPortfolioItems();
        }
    },
});
</script>