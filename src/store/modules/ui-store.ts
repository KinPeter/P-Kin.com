import { ActionContext } from 'vuex';

interface UIState {
    scrolledHeader: boolean;
}

const state: UIState = {
    scrolledHeader: false,
};

const getters = {
    scrolledHeader(st: UIState): boolean {
        return st.scrolledHeader;
    },
};

const mutations = {
    setScrolledHeader(st: UIState, value: boolean): void {
        st.scrolledHeader = value;
    },
};

const actions = {
    headerScrolledDown(context: ActionContext<any, any>): void {
        context.commit('setScrolledHeader', true);
    },
    headerScrolledToTop(context: ActionContext<any, any>): void {
        context.commit('setScrolledHeader', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
