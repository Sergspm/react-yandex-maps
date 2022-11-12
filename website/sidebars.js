/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    { type: 'autogenerated', dirName: '.' },
    { type: 'link', label: 'Examples', href: 'https://codesandbox.io/search?query=&page=1&configure%5BhitsPerPage%5D=12&refinementList%5Bnpm_dependencies.dependency%5D%5B0%5D=%40pbe%2Freact-yandex-maps' }
  ],
};

module.exports = sidebars;