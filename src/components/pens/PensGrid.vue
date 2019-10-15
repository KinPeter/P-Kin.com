<template>
    <section id="pens-grid">
        <app-pen-item
            v-for="pen in penItems"
            :key="pen.codepenId"
            :pen="pen">
        </app-pen-item>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ContentBoxVue from '../content-box/ContentBox.vue';
import PenItemVue from './PenItem.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['penItems']),
    },
    components: {
        appPenItem: PenItemVue,
    },
});
</script>

<style lang="scss">
@import '../../scss/_variables';

section#pens-grid {
    width: 100%;
    display: block;
    @media (min-width: $lg) {
        display: grid;
        grid-gap: 1rem 2rem;
        grid-template-columns: repeat(2, calc(50% - 1rem));
    }
}
</style>