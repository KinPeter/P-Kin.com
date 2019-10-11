import { Context } from '@/shared';

interface ErrorState {
    hasError: boolean;
    errorMessage: string;
}

const state: ErrorState = {
    hasError: false,
    errorMessage: '',
};

const getters = {
    hasError(st: ErrorState): boolean {
        return st.hasError;
    },
    errorMessage(st: ErrorState): string {
        return st.errorMessage;
    },
};

const mutations = {
    setError(st: ErrorState, value: boolean): void {
        st.hasError = value;
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
};

export default {
    state,
    getters,
    mutations,
    actions,
};
