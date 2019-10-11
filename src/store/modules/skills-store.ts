import { API_URL, Context } from '@/shared';
import { Skill } from '@/models/skills';

interface SkillState {
    skills: Skill[];
}

const state: SkillState = {
    skills: [],
};

const getters = {
    skills(st: SkillState): Skill[] {
        return st.skills;
    },
};

const mutations = {
    setSkills(st: SkillState, skills: Skill[]): void {
        st.skills = skills;
    },
};

const actions = {
    async fetchSkills(context: Context): Promise<void> {
        context.dispatch('loadingStart');
        try {
            const res: Response = await fetch(API_URL + 'skills.json');
            const data = await res.json();
            context.commit('setSkills', data);
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
