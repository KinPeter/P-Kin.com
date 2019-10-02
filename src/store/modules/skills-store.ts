import { API_URL } from '@/shared';
import { Skill } from '@/interfaces/skills';
import { ActionContext } from 'vuex';

interface SkillState {
    skills: Skill[];
}

const state: SkillState = {
    skills: [],
};

const getters = {
    skills(ss: SkillState): Skill[] {
        return ss.skills;
    },
};

const mutations = {
    setSkills(ss: SkillState, skills: Skill[]): void {
        ss.skills = skills;
    },
};

const actions = {
    async fetchSkills(context: ActionContext<SkillState, SkillState>): Promise<void> {
        try {
            const res: Response = await fetch(API_URL + 'skills.json');
            const data = await res.json();
            context.commit('setSkills', data);
        } catch (error) {
            // handle error
        } finally {
            // loading-false
        }
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
