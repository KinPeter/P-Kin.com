import { API_URL } from '@/shared';
import { PortfolioItem } from './../../models/portfolio';
import { ActionContext } from 'vuex';

interface PortfolioState {
    portfolioItems: PortfolioItem[];
    portfolioFilters: string[];
    filteredPortfolio: PortfolioItem[];
}

const state: PortfolioState = {
    portfolioItems: [],
    portfolioFilters: [
        'Angular', 'Vue', 'Svelte', 'React', 'JavaScript', 'JQuery', 'TypeScript', 'SCSS', 'Bootstrap', 'Material', 'Firebase', 'Node.js',
    ],
    filteredPortfolio: [],
};

const getters = {
    portfolioFilters(st: PortfolioState): string[] {
        return st.portfolioFilters;
    },
};

const mutations = {
    setPortfolioFilters(st: PortfolioState, filters: string[]): void {
        st.portfolioFilters = filters;
    },
    setPortfolioItems(st: PortfolioState, portfolio: PortfolioItem[]): void {
        st.portfolioItems = portfolio;
    },
    filterItems(st: PortfolioState, filter: string): void {
        st.filteredPortfolio = st.portfolioItems.filter((item) => {
            return item.badges.includes(filter.toLowerCase());
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
            const data: PortfolioItem[] = await res.json();
            context.commit('setPortfolioItems', data);
        } catch (error) {
            // handle error
        } finally {
            // loading-false
        }
    },
    filterPortfolio(context: ActionContext<any, any>, filter: string): void {
        context.commit('filterItems', filter);
        // tslint:disable-next-line: no-console
        console.log('actions.filterPortfolio: ', filter);
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
