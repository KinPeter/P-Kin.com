<template>
    <section>
        <h3>This is Portfolio Grid</h3>
        <app-portfolio-item></app-portfolio-item>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import PortfolioItemVue from './PortfolioItem.vue';

export default Vue.extend({
    components: {
        appPortfolioItem: PortfolioItemVue,
    },
});
</script>