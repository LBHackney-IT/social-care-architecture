const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Social Care System',
  tagline: 'A central landing zone to document the architecture of the Social Care System.',
  url: "https://lbhackney-it.github.io/",
  baseUrl: "/social-care-architecture/",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logo.svg',
  organizationName: "lbhackney-it",
  projectName: "social-care-architecture",
  trailingSlash: true,
  themeConfig: {
    navbar: {
      title: 'Social Care System',
      logo: {
        alt: 'Hackney Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/LBHackney-IT/social-care-architecture',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'About',
              to: '/',
            },
            {
              label: 'Architecture Decision Records (ADRs)',
              to: '/decisions',
            },
            {
              label: 'Proof of concepts',
              to: '/proof-of-concepts/mash-data-import',
            },
          ],
        },
        {
          title: 'Related repositories',
          items: [
            {
              label: 'Social Care Frontend',
              href: 'https://github.com/LBHackney-IT/lbh-social-care-frontend',
            },
            {
              label: 'Social Care Case Viewer API',
              href: 'https://github.com/LBHackney-IT/social-care-case-viewer-api',
            },
            {
              label: 'Residents Social Care Platform API',
              href: 'https://github.com/LBHackney-IT/residents-social-care-platform-api',
            },
            {
              label: 'Adult Social Care Care Package Builder Frontend',
              href: 'https://github.com/LBHackney-IT/lbh-adult-social-care-frontend',
            },
            {
              label: 'Adult Social Care Care Package Builder API',
              href: 'https://github.com/LBHackney-IT/lbh-adult-social-care-api',
            },
            {
              label: 'Adult Social Care Package Builder Transactions API',
              href: 'https://github.com/LBHackney-IT/lbh-adult-social-care-transactions-api',
            },
            {
              label: 'Infrastructure',
              href: 'https://github.com/LBHackney-IT/infrastructure',
            },
          ],
        },
        {
          title: 'Hackney Playbooks',
          items: [
            {
              label: 'Directory',
              href: 'https://playbook.hackney.gov.uk',
            },
            {
              label: 'API Playbook',
              href: 'https://playbook.hackney.gov.uk/API-Playbook/',
            },
            {
              label: 'Infrastructure Playbook',
              href: 'https://playbook.hackney.gov.uk/Infrastructure-Playbook/',
            },
          ],
        },
      ],
      copyright: 'Made by HackIT.',
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/LBHackney-IT/social-care-architecture/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
