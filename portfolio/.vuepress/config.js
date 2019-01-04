const config = require('../config.json');
module.exports = {
  title: config.title,
  description: config.description,
  base: "/",
  themeConfig: {
    logo: config.logo,
    footer: config.footer,
    nav: config.navigation,
  },
  head: [
    ['link', {
      rel: "icon",
      href: config.favicon
    }],
    ['link', {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.6.3/css/all.css",
      crossorigin: "anonymous"
    }]
  ],
  markdown: {
    anchor: {
      permalink: false
    }
  },
  ga: "UA-23574008-1"
};