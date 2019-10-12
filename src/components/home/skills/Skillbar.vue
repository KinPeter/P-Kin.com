<template>
    <section id="skillbar">
        <div class="bars">
            <div class="bar"
                v-for="(lev, i) in level"
                :key="i"
                :class="`bar-${i+1}`">
            </div>
        </div>
        <label>{{ skill.language | uppercase }}</label>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Skill } from '../../../models/skills';

export default Vue.extend({
    props: {
        skill: {
            type: Object as () => Skill,
            required: true,
        },
    },
    computed: {
        level(): undefined[] {
            return new Array(+this.skill.level);
        },
    },
});
</script>

<style lang="scss">
@import '../../../scss/variables';

section#skillbar {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    label {
        width: 50%;
        text-align: right;
        padding-right: 1rem;
        line-height: 2;
    }

    .bars {
        width: 50%;
        margin-bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .bar {
            width: 5px;
            height: 1rem;
            margin-bottom: 0px;
            margin-right: 5px;
            border-radius: 2px;
        }
        @for $i from 1 through 10 {
            .bar-#{$i} {
                background-color: nth($gradColors, $i);
            }
        }
    }

    @media (min-width: $sm) {
        width: 120px;
        height: 120px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        label {
            width: auto;
            text-align: center;
            padding-right: 0;
            line-height: 1;
        }

        .bars {
            width: auto;
            margin-bottom: .3rem;
            display: flex;
            flex-direction: column-reverse;
            .bar {
                width: 60px;
                height: 4px;
                margin-bottom: 4px;
                margin-right: 0;
                border-radius: 2px;
            }
            @for $i from 1 through 10 {
                .bar-#{$i} {
                    background-color: nth($gradColors, $i);
                }
            }
        }
    }

}
</style>