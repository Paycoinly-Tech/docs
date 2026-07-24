import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config()

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const useCases = [
  { label: 'Checkout and Subscription', to: '/docs/integrations/manual' },
  { label: 'POS and Local Businesses', to: '/docs/integrations/pos' },
  { label: 'Donation', to: '/docs/integrations/donation' },
  { label: 'Wordpress', to: '/docs/integrations/wordpress' },
  { label: 'Woocommerce', to: '/docs/integrations/woocommerce' },
  { label: 'Withdrawal', to: '/docs/integrations/withdraw' }
]

const legal = [
  { label: 'Terms of Service', to: '/terms-of-service' },
  { label: 'Privacy Policy', to: '/privacy-policy' }
]

const contactLink = 'https://forms.zohopublic.com/techpayc1/form/ContactUs/formperma/kWsjKLqIPHDUpQa84UIGxq-Cnqc-S0AHjZRq_aGH-hI'

const config: Config = {
  title: 'Paycoinly',
  tagline: 'Dinosaurs are cool',
  favicon: 'https://app.paycoinly.xyz/favicon.ico',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  plugins: ['docusaurus-plugin-sass'],

  // Set the production url of your site here
  url: 'https://www.paycoinly.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Paycoinly', // Usually your GitHub org/user name.
  projectName: 'Paycoinly', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          ignorePatterns: ['/blog/**'],
        },
        gtag: {
          trackingID: 'G-TCFW6CMXKJ',
          anonymizeIP: true,
        },
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: String(process.env.ALGOLIA_APP_ID),

      // Public API key: it is safe to commit it
      apiKey: String(process.env.ALGOLIA_API_KEY),

      indexName: String(process.env.ALGOLIA_INDEX_NAME),

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      // Optional: whether you want to use the new Ask AI feature (undefined by default)
      // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',

      //... other Algolia params
    },
    navbar: {
      // title: 'Paycoinly',
      logo: {
        alt: 'Paycoinly Logo',
        src: 'https://app.paycoinly.xyz/logo/light.svg',
        srcDark: 'https://app.paycoinly.xyz/logo/dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'dropdown',
          label: 'How It Works',
          position: 'left',
          items: [
            {
              label: 'Payment',
              to: '/docs/how-work/payment',
            },
            {
              label: 'Withdrawal',
              to: '/docs/how-work/withdraw',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Use Cases',
          position: 'left',
          items: useCases,
        },
        {
          type: 'dropdown',
          label: 'Legal',
          position: 'left',
          items: legal,
        },
        {
          to: contactLink,
          position: 'left',
          label: 'Contact Us',
        },
        { to: 'https://app.paycoinly.xyz/register', label: 'Register', position: 'right' },
        { to: 'https://app.paycoinly.xyz/login', label: 'Login', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Logo',
        src: 'https://app.paycoinly.xyz/logo/dark.svg',
        href: 'https://www.paycoinly.xyz',
        width: 160,
        height: 51,
      },
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'How It Works',
              to: '/docs/category/how-does-it-work',
            },
          ],
        },
        {
          title: 'Use Cases',
          items: useCases,
        },
        {
          title: 'Legal',
          items: legal,
        },
        {
          title: 'Company',
          items: [
            {
              label: 'Contact Us',
              to: contactLink,
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Paycoinly`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
