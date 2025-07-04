import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config = {
  title: 'Tutorial',
  tagline: '各类教程、免费教程',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://coolclk.github.io',
  baseUrl: '/tutorial/',

  organizationName: 'CoolCLK',
  projectName: 'tutorial',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [
            remarkMath,
          ],
          rehypePlugins: [
            [rehypeKatex, { output: 'mathml' }],
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CoolCLK 的网站',
        logo: {
          alt: '图标',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {
            href: 'https://github.com/CoolCLK/tutorial',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '联系我们',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CoolCLK/tutorials',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CoolCLK, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['c', 'cpp', 'java', 'csharp', 'python', 'kotlin', 'pascal', 'javascript', 'ruby', 'php', 'rust', 'go', 'haskell', 'lua', 'ocaml', 'julia', 'scala', 'perl'],
      },
    }),

  themes: [
    '@docusaurus/theme-mermaid',
  ],
};

export default config;
