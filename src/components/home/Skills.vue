<template>
    <section>
        <h3 class="box-title">Tech stack</h3>
        <div class="skills-container">
            <app-skillbar
                v-for="skill in skills"
                :key="skill.language"
                :skill="skill">
            </app-skillbar>
        </div>
        <div class="other-techs-container">
            <h4 class="sub-title">Other related technologies I'm familiar with, or have some experience with:</h4>
            <ul>
                <li
                    v-for="(tech, i) in otherTechs"
                    :key="tech">
                    <span class="tech">{{ tech }}</span>
                    <span v-if="i < otherTechs.length-1">|</span>                    
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import SkillbarVue from './Skillbar.vue';

export default Vue.extend({
    components: {
        appSkillbar: SkillbarVue,
    },
    computed: {
        ...mapGetters(['skills', 'otherTechs']),
    },

});
</script>

<style lang="scss">
.skills-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
}
.other-techs-container {
    margin-top: 2rem;
    ul {
        list-style-type: none;
        padding: 0;
        margin: 1rem 0 0 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        li {
            display: inline-block;
            span.tech {
                display: inline-block;
                margin: .2rem .5rem;
            }
        }
    }
}
</style>