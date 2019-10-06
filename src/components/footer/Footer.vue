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
