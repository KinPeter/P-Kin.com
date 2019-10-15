<template>
<transition name="filters" appear>
    <section id="portfolio-mobile-info" @click="$emit('closeInfo')">
        <div class="dialog-box">
            <div class="icon">
                <i class="icon-info"></i>
            </div>
            <div class="message">
                Narrow the results using the filter options in the menu.
            </div>
        </div>
        <a>&times;</a>
    </section>
</transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/_shared';

section#portfolio-mobile-info {
    position: relative;    
    border-radius: 15px;
    background-color: $dark;
    color: $light;
    margin-bottom: 1rem;
    @extend %dialogBox;
}
</style>