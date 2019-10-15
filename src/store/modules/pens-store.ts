import { API_URL, Context } from '@/shared';
import { PenItem } from './../../models/pens';

interface PensState {
    penItems: PenItem[];
    itemsLoaded: boolean;
}

const state: PensState = {
    penItems: [],
    itemsLoaded: false,
};

const getters = {
    penItems(st: PensState): PenItem[] {
        return st.penItems;
    },
    pensLoaded(st: PensState): boolean {
        return st.itemsLoaded;
    },
};

const mutations = {
    setPenItems(st: PensState, pens: PenItem[]): void {
        st.penItems = pens;
        st.itemsLoaded = true;
    },
};

const actions = {
    async fetchPenItems(context: Context): Promise<void> {
        context.dispatch('loadingStart');
        try {
            const res: Response = await fetch(API_URL + 'pen-items.json');
            const data: any = await res.json();
            if (!data) { throw new Error(); }
            context.commit('setPenItems', data);
        } catch (error) {
            context.dispatch('errorOccured', 'Sorry, unable to fetch data. Please try again later.');
        } finally {
            context.dispatch('loadingFinish');
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
