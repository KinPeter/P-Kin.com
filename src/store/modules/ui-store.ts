import { ActionContext } from 'vuex';

interface UIState {
    scrolledHeader: boolean;
    animationPlayed: boolean;
}

const state: UIState = {
    scrolledHeader: false,
    animationPlayed: false,
};

const getters = {
    scrolledHeader(st: UIState): boolean {
        return st.scrolledHeader;
    },
    animationPlayed(st: UIState): boolean {
        return st.animationPlayed;
    },
};

const mutations = {
    setScrolledHeader(st: UIState, value: boolean): void {
        st.scrolledHeader = value;
    },
    setAnimationPlayed(st: UIState): void {
        st.animationPlayed = true;
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
};

export default {
    state,
    getters,
    mutations,
    actions,
};
