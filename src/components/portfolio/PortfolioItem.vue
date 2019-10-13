<template>
    <transition name="cbox" appear tag="div" mode="out-in">
        <app-content-box class="portfolio-item">
            <figure>
                <img :src="imageUrl" :alt="portfolioItem.name">
                <div class="overlay">
                    <section class="features">
                        <h3>Features:</h3>
                        <div class="feature"
                            v-for="feature in portfolioItem.features"
                            :key="feature.title">
                            <h4> <i class="icon-check"></i> {{ feature.title }}</h4>
                            <p>{{ feature.text }}</p>
                        </div>
                    </section>
                </div>
            </figure>
            <div class="badges">
                <span 
                    v-for="badge in portfolioItem.badges"
                    :key="badge">
                    {{ badge }}
                </span>
            </div>
            <h3>{{ portfolioItem.name }}</h3>
            <p class="description">{{ portfolioItem.descr }}</p>
            <div class="portfolio-footer">
                <div class="repo">
                   
                    <a :href="portfolioItem.repo" target="_blank">
                        <i :class="repoIconClass"></i>
                        Repository
                    </a>
                </div>
                <div class="try-now" v-if="portfolioItem.link">
                    <a :href="portfolioItem.link" target="_blank">Try it now!</a>
                </div>
            </div>
        </app-content-box>
    </transition>
</template>

<script lang="ts">
import Vue from 'vue';
import { PortfolioItem } from '../../models/portfolio';
import ContentBoxVue from '../content-box/ContentBox.vue';

export default Vue.extend({
    computed: {
        imageUrl(): string {
            return process.env.VUE_APP_IMAGE_URL + this.portfolioItem.image;
        },
        repoIconClass(): string {
            const repoLink = this.portfolioItem.repo;
            let iconClass = '';
            if (!!repoLink && repoLink.toLowerCase().includes('github')) {
                iconClass = 'icon-github';
            } else if (!!repoLink && repoLink.toLowerCase().includes('bitbucket')) {
                iconClass = 'icon-bitbucket';
            }
            return iconClass;
        },
    },
    props: {
        portfolioItem: {
            type: Object as () => PortfolioItem,
            required: true,
        },
    },
    components: {
        appContentBox: ContentBoxVue,
    },
});
</script>

<style lang="scss">
@import '../../scss/_variables';
@import '../../scss/_shared';

.portfolio-item {
    display: flex;
    flex-direction: column;

    figure {
        margin: -2rem -1rem 0 -1rem;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        overflow: hidden;
        position: relative;
        img {
            width: 100%;
            transition: all .3s ease;
        }
        .overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0;
            transition: all .3s ease;
            background-color: rgba(52,58,64,0.85);
            .features {
                h4 {
                    margin: 0;
                    display: inline-block;
                    @extend %gradientText;
                }
                p {
                    margin: .5rem 0 1rem 1.2rem;
                }
                color: $light;
                box-sizing: border-box;
                height: 100%;
                overflow: auto;
                padding: 1rem 2rem;
            }
        }
        &:after {
            content: '...';
            color: $light;
            font-size: 3rem;
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            background-color: rgba(0,0,0,0.3);
            width: 40px;
            height: 40px;
            border-radius: 50%;            
            text-align: center;
            line-height: 0.2;
        }
        &:hover {
            &:after {
                display: none;
            }
            .overlay {
                height: 100%;
            }
            img {
                filter: blur(5px);
            }
        }
    }
    .badges {
        margin-top: 0.5rem;
        span {
            font-size: 0.8rem;
            font-family: $mont-reg;
            color: $light;
            display: inline-block;
            background: $gradient;
            padding: .2rem 0.5rem;
            margin: 0 .3rem .3rem 0;
            border-radius: 2px;
        }
    }
    p.description {
        flex-grow: 1;
        margin-top: 0;
    }
    .portfolio-footer {
        margin-bottom: -.5rem;
        height: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .repo {
            font-family: $mont-reg;
            @extend %gradientText;
            a {
                @extend %gradientText;
                &:hover {
                    color: $dark;
                }
            }
        }
        .try-now {
            background: $magenta;
            padding: .4rem .6rem;
            border-radius: 4px;
            a {
                font-family: $mont-reg;
                font-size: 0.9rem;
                color: $light;
            }
            &:hover {
                background: $gradient-reverse;
                box-shadow: 0 2px 3px rgba(0,0,0,0.3);
            }
        }
    }
}
</style>