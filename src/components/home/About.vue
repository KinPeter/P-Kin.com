<template>
    <section id="about">
        <h3 class="box-title">About me</h3>
        <div class="about-flex">
            <div class="avatar">
                <div class="img"></div>
            </div>
            <p>After spending 12 years in the tourism industry, I decided to make a career change and become a programmer. Besides continous self-learning, hundreds of hours of Udemy courses and other tutorials, in 2019 I attended a Junior Software Developer bootcamp and started to work as a Frontend Developer. Nowadays I focus on improving my skills with modern JavaScript frameworks and other web development technologies.</p>
        </div>
        <div class="list-flex">
            <article>
                <h4 class="sub-title">Tasks I enjoy the most</h4>
                <ul>
                    <li><i class="icon-like"></i> Working with <b>Angular</b> and <b>TypeScript</b> </li>
                    <li><i class="icon-like"></i> Tinkering with <b>(S)CSS</b> and animations </li>
                    <li><i class="icon-like"></i> Using <b>modern JavaScript</b> features </li>
                    <li><i class="icon-like"></i> Having fun with my <b>side projects</b> </li>
                </ul>
            </article>
            <article>
                <h4 class="sub-title">Current goals</h4>
                <ul>
                    <li><i class="icon-goal"></i> Dive deeper into <b>Angular</b> and <b>Vue</b> </li>
                    <li><i class="icon-goal"></i> Explore the possibilities of <b>Web Components</b> </li>
                    <li><i class="icon-goal"></i> Learn some backend with <b>Node.js</b> </li>
                    <li><i class="icon-goal"></i> Become a <b>CSS Magician</b><i class="icon-smile"></i> </li>
                </ul>
            </article>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

section#about {
    .about-flex {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: $sm) {
            flex-direction: row;
            align-items: flex-start;
        }
        .avatar {
            position: relative;
            top: 5px;
            flex: none;
            margin: 1rem 1rem 0 0;
            z-index: 1;
            .img {
                background: url(../../assets/images/me.jpg);
                width: 80px;
                height: 80px;
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 50%;
            }
            &:before {
                content: '';
                position: absolute;
                top: -3px;
                left: -3px;
                width: 86px;
                height: 86px;
                border-radius: 50%;
                background: $gradient-topdown;
                z-index: -1;
            }
        }
        p {
            line-height: 1.5;
            text-align: justify;
        }
    }
    .list-flex {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        article {
            &:nth-of-type(2) {
                margin-top: 1rem;
            }
            ul {
                margin: 0;
                padding: 0 0 0 .5rem;
                list-style-type: none;
                li {
                    line-height: 1.5;
                    text-indent: -1.5rem;
                    padding-left: 1.5rem;
                    i {
                        @extend %gradientText;
                        margin-right: 0.3rem;
                        &.icon-smile {
                            margin-left: 0.2rem;
                        }
                    }
                }
            }
        }
        @media (max-width: $sm) {
            ul li {
                margin-bottom: .5rem;
            }
        }
        @media (min-width: $lg) {
            flex-direction: row;
            justify-content: space-around;
            article:nth-of-type(2) {
                margin-top: 0;
            }
        }
    }
}
</style>