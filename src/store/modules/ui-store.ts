import { NavItem } from '@/models/header';
import { Context } from '../../shared';

interface UIState {
    loadingProgress: boolean[];
    scrolledHeader: boolean;
    animationPlayed: boolean;
    navItems: NavItem[];
    sideDrawerOpen: boolean;
}

const state: UIState = {
    loadingProgress: [],
    scrolledHeader: false,
    animationPlayed: false,
    navItems: [
        { name: 'home', path: '/' },
        { name: 'portfolio', path: '/portfolio' },
        { name: 'pens', path: '/pens' },
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
    isLoading(st: UIState): boolean {
        return st.loadingProgress.length !== 0;
    },
    isOnMobile(): boolean {
        return window.innerWidth < 576;
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
    addToLoading(st: UIState): void {
        const newProgress = [...st.loadingProgress, true];
        st.loadingProgress = newProgress;
    },
    removeFromLoading(st: UIState): void {
        if (st.loadingProgress.length > 0) {
            const newProgress = [...st.loadingProgress];
            newProgress.pop();
            st.loadingProgress = newProgress;
        }
    },
};

const actions = {
    headerScrolledDown(context: Context): void {
        context.commit('setScrolledHeader', true);
    },
    headerScrolledToTop(context: Context): void {
        context.commit('setScrolledHeader', false);
    },
    animationHasBeenPlayed(context: Context): void {
        context.commit('setAnimationPlayed');
    },
    openSideDrawer(context: Context): void {
        context.commit('setSideDrawerOpen', true);
    },
    closeSideDrawer(context: Context): void {
        context.commit('setSideDrawerOpen', false);
    },
    loadingStart(context: Context): void {
        context.commit('addToLoading');
    },
    loadingFinish(context: Context): void {
        context.commit('removeFromLoading');
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
