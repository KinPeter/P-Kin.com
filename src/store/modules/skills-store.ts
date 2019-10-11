import { API_URL, Context } from '@/shared';
import { Skill } from '@/models/skills';

interface SkillState {
    skills: Skill[];
    otherTechs: string[];
    skillsLoaded: boolean;
    otherTechsLoaded: boolean;
}

const state: SkillState = {
    skills: [],
    otherTechs: [],
    skillsLoaded: false,
    otherTechsLoaded: false,
};

const getters = {
    skills(st: SkillState): Skill[] {
        return st.skills;
    },
    otherTechs(st: SkillState): string[] {
        return st.otherTechs;
    },
    skillsLoaded(st: SkillState): boolean {
        return st.otherTechsLoaded && st.skillsLoaded;
    },
};

const mutations = {
    setSkills(st: SkillState, skills: Skill[]): void {
        st.skills = skills;
        st.skillsLoaded = true;
    },
    setOtherTechs(st: SkillState, otherTechs: string[]): void {
        st.otherTechs = otherTechs;
        st.otherTechsLoaded = true;
    },
};

const actions = {
    async fetchSkills(context: Context): Promise<void> {
        context.dispatch('loadingStart');
        try {
            const res: Response = await fetch(API_URL + 'skills.json');
            const data = await res.json();
            if (!data) { throw new Error(); }
            context.commit('setSkills', data);
        } catch (error) {
            context.dispatch('errorOccured', 'Sorry, unable to fetch data. Please try again later.');
        } finally {
            context.dispatch('loadingFinish');
        }
    },
    async fetchOtherTechs(context: Context): Promise<void> {
        context.dispatch('loadingStart');
        try {
            const res: Response = await fetch(API_URL + 'other-techs.json');
            const data = await res.json();
            if (!data) { throw new Error(); }
            context.commit('setOtherTechs', data);
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
