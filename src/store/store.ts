import Vue from 'vue';
import Vuex from 'vuex';

import SkillsStore from './modules/skills-store';
import PortfolioStore from './modules/portfolio-store';
import UIStore from './modules/ui-store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        skills: SkillsStore,
        portfolio: PortfolioStore,
        ui: UIStore,
    },
});
