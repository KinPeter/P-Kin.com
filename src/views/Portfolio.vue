<template>
    <section>
        <transition name="cbox" appear tag="section" >
            <app-content-box v-if="!isLoading">                
                <h3>This is the Portfolio Page</h3>
                <app-portfolio-filters></app-portfolio-filters>
                <app-portfolio-grid></app-portfolio-grid>
            </app-content-box>
        </transition>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import ContentBoxVue from '../components/content-box/ContentBox.vue';
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
        appContentBox: ContentBoxVue,
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