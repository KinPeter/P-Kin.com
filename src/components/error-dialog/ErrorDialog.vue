<template>
    <section id="error-dialog">
        <div class="dialog-box">
            <div class="icon">
                <i class="icon-error"></i>
            </div>
            <div class="message">
                {{ errorMessage }}
            </div>
        </div>
        <a @click="closeMe">&times;</a>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    computed: {
        errorMessage(): string {
            return this.$store.getters.errorMessage;
        },
    },
    methods: {
        closeMe(): void {
            this.$store.dispatch('closeErrorDialog');
        },
    },
});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

section#error-dialog {
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 999;
    width: 310px;
    box-sizing: border-box;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: rgba(0,0,0,0.9);
    color: $magenta;
    @extend %dialogBox;
}
</style>