import { ActionContext } from 'vuex';
import { NavItem } from '@/models/header';

interface UIState {
    scrolledHeader: boolean;
    animationPlayed: boolean;
    navItems: NavItem[];
    sideDrawerOpen: boolean;
}

const state: UIState = {
    scrolledHeader: false,
    animationPlayed: false,
    navItems: [
        { name: 'home', path: '/' },
        { name: 'portfolio', path: '/portfolio' },
    ],
    sideDrawerOpen: false,
};

const getters = {
    scrolledHeader(st: UIState): boolean {
        return st.scrolledHeader;
    },
    animationPlayed(st: UIState): boolean {
        return st.animationPlayed;
    },
    navItems(st: UIState): NavItem[] {
        return st.navItems;
    },
    sideDrawerOpen(st: UIState): boolean {
        return st.sideDrawerOpen;
    },
};

const mutations = {
    setScrolledHeader(st: UIState, value: boolean): void {
        st.scrolledHeader = value;
    },
    setAnimationPlayed(st: UIState): void {
        st.animationPlayed = true;
    },
    setSideDrawerOpen(st: UIState, value: boolean): void {
        st.sideDrawerOpen = value;
    },
};

const actions = {
    headerScrolledDown(context: ActionContext<any, any>): void {
        context.commit('setScrolledHeader', true);
    },
    headerScrolledToTop(context: ActionContext<any, any>): void {
        context.commit('setScrolledHeader', false);
    },
    animationHasBeenPlayed(context: ActionContext<any, any>): void {
        context.commit('setAnimationPlayed');
    },
    openSideDrawer(context: ActionContext<any, any>): void {
        context.commit('setSideDrawerOpen', true);
    },
    closeSideDrawer(context: ActionContext<any, any>): void {
        context.commit('setSideDrawerOpen', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
