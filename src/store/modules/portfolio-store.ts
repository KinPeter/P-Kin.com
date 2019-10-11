import { API_URL } from '@/shared';
import { PortfolioItem } from './../../models/portfolio';
import { ActionContext } from 'vuex';

const transformPortfolioItems = (data: any): PortfolioItem[] => {
    const rawArray: PortfolioItem[] = Object.values(data);
    const sortedPortfolio: PortfolioItem[] = rawArray.sort((i1, i2) => i2.addedAt - i1.addedAt);
    return sortedPortfolio;
};

interface PortfolioState {
    portfolioItems: PortfolioItem[];
    portfolioFilters: string[];
    filteredPortfolio: PortfolioItem[];
    filtersLoaded: boolean;
    itemsLoaded: boolean;
}

const state: PortfolioState = {
    portfolioItems: [],
    portfolioFilters: [],
    filteredPortfolio: [],
    filtersLoaded: false,
    itemsLoaded: false,
};

const getters = {
    portfolioFilters(st: PortfolioState): string[] {
        return st.portfolioFilters;
    },
    filteredPortfolio(st: PortfolioState): PortfolioItem[] {
        return st.filteredPortfolio;
    },
    portfolioLoaded(st: PortfolioState): boolean {
        return st.filtersLoaded && st.itemsLoaded;
    },
};

const mutations = {
    setPortfolioFilters(st: PortfolioState, filters: string[]): void {
        st.portfolioFilters = filters;
        st.filtersLoaded = true;
    },
    setPortfolioItems(st: PortfolioState, portfolio: PortfolioItem[]): void {
        st.portfolioItems = portfolio;
        st.filteredPortfolio = portfolio; // initially the same
        st.itemsLoaded = true;
    },
    filterItems(st: PortfolioState, filter: string): void {
        st.filteredPortfolio = st.portfolioItems.filter((item) => {
            return item.badges.includes(filter);
        });
    },
};

const actions = {
    async fetchPortfolioFilters(context: ActionContext<any, any>): Promise<void> {
        try {
            const res: Response = await fetch(API_URL + 'portfolio-badges.json');
            const data: string[] = await res.json();
            context.commit('setPortfolioFilters', data);
        } catch (error) {
            // handle error
        } finally {
            // loading-false
        }
    },
    async fetchPortfolioItems(context: ActionContext<any, any>): Promise<void> {
        try {
            const res: Response = await fetch(API_URL + 'portfolio-items.json');
            const data: any = await res.json();
            context.commit('setPortfolioItems', transformPortfolioItems(data));
        } catch (error) {
            // handle error
        } finally {
            // loading-false
        }
    },
    filterPortfolio(context: ActionContext<any, any>, filter: string): void {
        context.commit('filterItems', filter);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
