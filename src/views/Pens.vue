<template>
    <section v-if="!isLoading">
        <h3>This is the Pens Page</h3>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters(['isLoading']),
    },
    components: {
    },
});
</script>