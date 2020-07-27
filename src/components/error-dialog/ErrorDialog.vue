<template>
    <section v-if="deprecation" id="deprecation-dialog">
      <div class="dialog-box">
        <div class="icon">
          <i class="icon-error"></i>
        </div>
        <div class="message">
          <h1>Attention!</h1>
          <p><b>This site is NOT maintained anymore, the content is NOT up to date. <br> Please check out my latest website on
            <a href="https://www.p-kin.com">www.p-kin.com</a></b></p>
        </div>
      </div>
      <a @click="closeDeprecation" class="error-dialog__close">&times;</a>
    </section>
    <section v-else id="error-dialog">
      <div class="dialog-box">
        <div class="icon">
          <i class="icon-error"></i>
        </div>
        <div class="message">
          {{ errorMessage }}
        </div>
      </div>
      <a @click="closeMe" class="error-dialog__close">&times;</a>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        deprecation: { type: Boolean, default: false },
    },
    computed: {
        errorMessage(): string {
            return this.$store.getters.errorMessage;
        },
    },
    methods: {
        closeMe(): void {
            this.$store.dispatch('closeErrorDialog');
        },
        closeDeprecation(): void {
            this.$store.dispatch('closeDeprecationDialog');
        },
    },
});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

section#error-dialog, section#deprecation-dialog {
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

section#deprecation-dialog {
    width: 400px;
}
</style>
