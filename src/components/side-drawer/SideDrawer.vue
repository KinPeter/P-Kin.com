<template>
    <section id="side-drawer-container">
        <transition name="side-fade" appear>
            <div v-if="sideDrawerOpen" class="overlay" @click="closeSideDrawer"></div>
        </transition>
        <transition name="side-slide" appear>
            <div v-if="sideDrawerOpen" class="side-drawer">
                <section>
                    <h3>Menu</h3>
                    <router-link 
                        tag="a"
                        v-for="(navItem, i) in navItems" 
                        :key="i" 
                        :to="navItem.path"
                        @click.native="closeSideDrawer">{{ navItem.name | uppercase }}</router-link>
                </section>

                <section id="portfolio-filters" v-if="isPortfolio">
                    <h3>Filter portfolio</h3>
                    <a 
                        v-for="filter in portfolioFilters"
                        :key="filter"
                        @click="filterAndClose(filter)">{{ filter | uppercase }}</a>
                </section>
            </div>
        </transition>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters(['sideDrawerOpen', 'navItems', 'portfolioFilters']),
        isPortfolio(): boolean {
            return this.$route.path === '/portfolio';
        },
    },
    methods: {
        ...mapActions(['closeSideDrawer', 'filterPortfolio']),
        filterAndClose(filter: string): void {
            this.$store.dispatch('closeSideDrawer');
            this.$store.dispatch('filterPortfolio', filter);
        },
    },
});
</script>

<style lang="scss">
@import '../../scss/_variables';

#side-drawer-container {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    @media (min-width: $sm) {
        display: none;
    }
    .overlay {
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.8);
        transition: opacity .2s ease;
    }
    .side-drawer {
        position: fixed;
        top: 0;
        left: 0;
        background-color: $light;
        height: 100vh;
        width: 250px;
        box-sizing: border-box;
        padding: 1rem;
        border-right: 3px solid $magenta;
        transition: all .3s ease;
        overflow-y: auto;
        h3 {
            position: relative;
            padding-bottom: 1rem;
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: -1rem;
                width: calc(100% + 2rem);
                height: 2px;
                background: $gradient;
            }
        }
        a {
            font-size: 1.2rem;
            display: block;
            padding: 0 0 .5rem 1rem;
            &.router-link-exact-active {
                color: $magenta;
            }
        }
        #portfolio-filters {
            margin-top: 2rem;
        }
    }
}



</style>