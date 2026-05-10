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

  organizationName: 'clk',
  projectName: 'tutorial',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css',
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
            [
              rehypeKatex,
              {
                output: 'mathml',
                strict: (errorCode, errorMsg, token) => {
                  if (errorCode === 'unicodeTextInMathMode') {
                    return 'ignore';
                  }
                  return 'warn';
                },
              },
            ],
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
      image: 'img/logo.svg',
      navbar: {
        title: '',
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
                href: 'https://github.com/CoolCLK/tutorial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} clk, Inc. Built with Docusaurus.`,
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

  webpack: {
    configure: (webpackConfig) => {
      return {
        ...webpackConfig,
        ignoreWarnings: [
          (warning) =>
            warning.message &&
            warning.message.includes('Critical dependency') &&
            warning.message.includes('vscode-languageserver-types'),
        ],
      };
    },
  },
};

export default config;