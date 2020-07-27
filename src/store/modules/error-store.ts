import { Context } from '@/shared';

interface ErrorState {
    hasError: boolean;
    hasDeprecationError: boolean;
    errorMessage: string;
}

const state: ErrorState = {
    hasError: false,
    hasDeprecationError: true,
    errorMessage: '',
};

const getters = {
    hasError(st: ErrorState): boolean {
        return st.hasError;
    },
    hasDeprecationError(st: ErrorState): boolean {
        return st.hasDeprecationError;
    },
    errorMessage(st: ErrorState): string {
        return st.errorMessage;
    },
};

const mutations = {
    setError(st: ErrorState, value: boolean): void {
        st.hasError = value;
    },
    setDeprecationError(st: ErrorState, value: boolean): void {
        st.hasDeprecationError = value;
    },
    setErrorMessage(st: ErrorState, message: string): void {
        st.errorMessage = message;
    },
};

const actions = {
    errorOccured(context: Context, message: string): void {
        context.commit('setError', true);
        context.commit('setErrorMessage', message);
    },
    closeErrorDialog(context: Context): void {
        context.commit('setError', false);
        context.commit('setErrorMessage', '');
    },
    closeDeprecationDialog(context: Context): void {
        context.commit('setDeprecationError', false);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
