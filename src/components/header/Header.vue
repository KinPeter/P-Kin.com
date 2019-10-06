<template>
<section id="header" :class="{scrolled: scrolledHeader}">
    <img v-if="!onMobile" src="@/assets/svg/header-bg.svg" alt="header-bg">
    <img v-if="onMobile" src="@/assets/svg/header-bg-m.svg" alt="header-bg">
    <div class="header-inner">
        <div id="nav">
            <router-link 
                tag="a"
                v-for="(navItem, i) in navItems" 
                :key="i" 
                :to="navItem.path">{{ navItem.name | uppercase }}</router-link>
        </div>
        <i class="icon-p-logo" @click="$router.push('/')"></i>
    </div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { NavItem, HeaderData } from '@/models/header';

export default Vue.extend({
    data(): HeaderData {
        return {
            navItems: [
                { name: 'home', path: '/' },
                { name: 'portfolio', path: '/portfolio' },
            ],
        };
    },
    computed: {
        ...mapGetters(['scrolledHeader']),
        onMobile(): boolean {
            return window.innerWidth < 576;
        },
    },
});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

#header {
    height: 80px;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 3px 3px rgba(0,0,0,0.5);
    transition: all .3s ease;
    position: relative;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .header-inner {
        position: relative;
        margin: 0 auto;
        @extend %widthMedia;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
            position: relative;
            color: white;
            font-size: 2.2rem;
            cursor: pointer;
            &:hover {
                animation: logoBlur .5s ease;
                text-shadow: 2px 2px 3px rgba(0,0,0,0.5);
            }
            @keyframes logoBlur {
                0%   { filter: blur(0) }
                50%  { filter: blur(3px) }
                100% { filter: blur(0) }
            }
        }
        #nav {
            position: relative;
            a {
                font-family: $mont-reg;
                font-size: 1.2rem;
                margin-right: 1rem;
                position: relative;
                &.router-link-exact-active {
                    color: $magenta;
                }
                &:after {
                    content: '';
                    position: absolute;
                    bottom: -1px;
                    left: 0;
                    height: 2px;
                    width: 0;
                    background: $gradient;
                    transition: all .2s ease;
                }
                &:hover {
                    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
                    &:after {
                        width: 100%
                    }
                }
                @media (max-width: $sm) {
                    text-shadow: none;
                    &:after {
                        display: none;
                    }
                }
            }
        }
    }
    &.scrolled {
        position: fixed;
        top:0;
        left: 0;
        animation: headerIn .2s ease forwards;
        @keyframes headerIn {
            from { height: 0px; opacity: 0; }
            to   { height: 50px; opacity: 1; }
        }
        .header-inner {
            i {
                font-size: 1.5rem;
            }
            #nav a {
                font-size: 1rem;
            }
        }
    }
}
</style>
