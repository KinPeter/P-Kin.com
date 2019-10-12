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
        ...mapGetters(['skills']),
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
</style>