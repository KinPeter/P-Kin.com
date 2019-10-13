<template>
    <transition name="cbox" appear tag="div">
        <app-content-box>
            <h3>{{ portfolioItem.name }}</h3>
            <p>{{ portfolioItem.descr }}</p>
        </app-content-box>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { PortfolioItem } from '../../models/portfolio';
import ContentBoxVue from '../content-box/ContentBox.vue';

export default Vue.extend({
    props: {
        portfolioItem: {
            type: Object as () => PortfolioItem,
            required: true,
        },
    },
    components: {
        appContentBox: ContentBoxVue,
    },
});
</script>

<style lang="scss">

</style>