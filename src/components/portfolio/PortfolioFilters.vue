<template>
    <transition name="filters" appear>
        <section id="filters-container" :class="{scrolled: scrolledHeader}">
            <h4>Filters 
                <i class="icon-arrow-down" v-if="scrolledHeader"></i>
                <i class="icon-arrow-right" v-else></i>
            </h4>
            <div class="filters">
                <span
                    v-for="filter in portfolioFilters"
                    :key="filter"
                    @click="filterPortfolio(filter)">
                    {{ filter | uppercase }}
                </span>
            </div>
        </section>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
    computed: {
        ...mapGetters(['scrolledHeader', 'portfolioFilters']),
    },
    methods: {
        ...mapActions(['filterPortfolio']),
    },
});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

section#filters-container {
    background: $dark;
    color: white;
    position: fixed;
    top: 80px;
    transition: all .3s ease;
    z-index: 10;
    box-sizing: border-box;
    @extend %widthMedia;
    padding: 1rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    display: none;

    h4 {
        margin: 0;
        i {
            display: inline-block;
            font-size: 150%;
            transition: all .3s ease;
            position: relative;
            top: 5px;
            margin-top: -7px;
        }
    }
    .filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 0.5rem;
        margin-bottom: 0;
        span {
            display: inline-block;
            padding: .5rem;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                @extend %gradientText;
            }
        }
    }

    @media (min-width: $sm) {
        display: flex;
        flex-direction: column;
        &.scrolled {
            background: rgba(0,0,0,0.8);
            top: 50px;
            flex-direction: column-reverse;
            transform: translateY(-70%);
            .filters {
                margin-top: 0;
                margin-bottom: 0.5rem;
            }
            &:hover {
                transform: translateY(0);
                i {
                    transform: rotate(-180deg);
                }
            }
        }
    }
    @media (min-width: $md) {
        &.scrolled {
            transform: translateY(-65%);
        }
    }
    @media (min-width: $xl) {
        &.scrolled {
            transform: translateY(-50%);
        }
    }
    
}
</style>