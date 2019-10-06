<template>
    <div class="content-box">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>

<style lang="scss">
@import '../../../scss/variables';

.content-box {
    position: relative;
    padding: 2rem 1rem;
    background-color: #fff;
    border-radius: 5px 5px 35px 15px;
    margin-bottom: calc(1rem + 5px);
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 100%;
        background: $gradient;
        z-index: -1;
        border-radius: 5px;
        box-shadow: 0 3px 4px rgba(0, 0, 0, 0.5);
    }
}
</style>