<template>
    <section>
        <transition name="cbox" appear tag="section" >
            <app-content-box v-if="!isLoading">
                <h3>This is the Pens Page</h3>
            </app-content-box>
        </transition>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import ContentboxVue from '../components/content-box/ContentBox.vue';

export default Vue.extend({
    computed: {
        ...mapGetters(['isLoading']),
    },
    components: {
        appContentBox: ContentboxVue,
    },
});
</script>

<style lang="scss">

</style>