<template>
    <footer>
        <div class="footer-inner">
            <div class="footer-text">
                <p>With <i class="icon-heart"></i> from Budapest</p>
                <p>© 2019, Peter Kin</p>
            </div>
            <div class="contacts">
                <p>Contact me / check out my page on:</p>
                <a 
                    v-for="contact in contacts"
                    :key="contact.name"
                    :href="contact.link"
                    target="_blank">
                    <i
                        :class="contact.iconClass"
                        @mouseenter="selectedContact = contact.name"
                        @mouseleave="selectedContact = ''">
                    </i>
                </a>
                <br><p>{{ selectedContact }}</p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { ContactItem, FooterData } from '@/models/footer';

export default Vue.extend({
    data(): FooterData {
        return {
            contacts: [
                {
                    name: 'Email',
                    iconClass: 'icon-mail',
                    link: 'mailto:kinpeter85@gmail.com',
                },
                {
                    name: 'LinkedIn',
                    iconClass: 'icon-linkedin',
                    link: 'https://www.linkedin.com/in/peter-kin-6b7794172/',
                },
                {
                    name: 'Facebook',
                    iconClass: 'icon-facebook',
                    link: 'https://www.facebook.com/peter.kin',
                },
                {
                    name: 'Skype',
                    iconClass: 'icon-skype',
                    link: 'skype:kinpeter?chat',
                },
                {
                    name: 'GitHub',
                    iconClass: 'icon-github',
                    link: 'https://github.com/KinPeter',
                },
                {
                    name: 'BitBucket',
                    iconClass: 'icon-bitbucket',
                    link: 'https://bitbucket.org/KinPeter/',
                },
                {
                    name: 'CodePen',
                    iconClass: 'icon-codepen',
                    link: 'https://codepen.io/kinpeter',
                },
            ],
            selectedContact: '',
        };
    },
});
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/shared';

footer {
    background-color: $dark;
    color: white;
    height: 220px;
    box-sizing: border-box;
    padding: 1rem 0;
    overflow: hidden;
    transition: all .3s ease;

    .footer-inner {
        margin: 0 auto;
        @extend %widthMedia;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        height: 100%;

        .footer-text {
            text-align: center;
            p {
                margin: 0.5rem 0;
                font-size: .9rem;
            }
            i {
                font-size: 1rem;
                @extend %gradientText;
            }
        }

        .contacts {
            text-align: center;
            height: 50%;
            p {
                font-size: 0.9rem;
                margin: .5rem 0;
                &:nth-of-type(2) {
                    margin-top: .1rem;
                    display: inline-block;
                    font-family: $muli-bold;
                    @extend %gradientText;
                    font-size: 1rem;
                }
            }
            a {
                color: white;
                i {
                    font-size: 2rem;
                    margin-left: 0.5rem;
                    cursor: pointer;
                    &:hover {
                        @extend %gradientText;
                    }
                }
            }
        }
    }

    @media (min-width: $md) {
        height: 120px;
        .footer-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            .footer-text {
                text-align-last: left;
            }
            .contacts {
                text-align: right;
                height: 100%;
                a i {
                    font-size: 1.5rem;
                    margin-left: 0.7rem;
                }
            }
        }
    }

    &:before {
        content: '';
        width: 100%;
        height: 3px;
        background: $gradient-reverse;
        display: block;
        position: relative;
        top: -1rem;
    }

}
</style>
