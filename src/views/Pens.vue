<template>
    <section v-if="!isLoading">
        <app-pens-grid></app-pens-grid>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import PensGridVue from '../components/pens/PensGrid.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['isLoading', 'pensLoaded']),
    },
    methods: {
        ...mapActions(['fetchPenItems']),
    },
    components: {
        appPensGrid: PensGridVue,
    },
    created() {
        if (!this.pensLoaded) {
            this.fetchPenItems();
        }
    },
});
</script>
