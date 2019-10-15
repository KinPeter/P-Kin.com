import Vue from 'vue';
import Vuex from 'vuex';

import SkillsStore from './modules/skills-store';
import PortfolioStore from './modules/portfolio-store';
import UIStore from './modules/ui-store';
import ErrorStore from './modules/error-store';
import PensStore from './modules/pens-store';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        skills: SkillsStore,
        portfolio: PortfolioStore,
        pens: PensStore,
        ui: UIStore,
        error: ErrorStore,
    },
});
