<template>
    <transition name="cbox" appear tag="section" >
            <app-content-box>
                <iframe 
                    class="pen" 
                    height="400" 
                    scrolling="no" 
                    :title="pen.codepenTitle" 
                    :src="iframeUrl" 
                    frameborder="no" 
                    allowtransparency="true" 
                    allowfullscreen="true">
                        See the Pen 
                        <a :href="codepenUrl">{{ pen.codepenTitle }}</a>
                        by Peter Kin
                        (<a href='https://codepen.io/kinpeter'>@kinpeter</a>) on 
                        <a href='https://codepen.io'>CodePen</a>.
                </iframe>  
                <h3>{{ pen.name }}</h3>
                <p>{{ pen.descr }}</p>
            </app-content-box>
        </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import ContentBoxVue from '../content-box/ContentBox.vue';
import { PenItem } from '../../models/pens';

export default Vue.extend({
    props: {
        pen: {
            type: Object as () => PenItem,
            required: true,
        },
    },
    computed: {
        iframeUrl(): string {
            // tslint:disable-next-line:max-line-length
            return `https://codepen.io/kinpeter/embed/${this.pen.codepenId}?height=400&theme-id=dark&default-tab=result`;
        },
        codepenUrl(): string {
            return `https://codepen.io/kinpeter/pen/${this.pen.codepenId}`;
        },
    },
    components: {
        appContentBox: ContentBoxVue,
    },
});
</script>

<style lang="scss">
    iframe.pen {
        margin: -2rem -1rem 0 -1rem;
        width: calc(100% + 2rem);
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>