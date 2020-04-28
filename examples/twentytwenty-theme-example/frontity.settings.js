export default {
  name: "twentytwenty-theme-example",
  state: {
    frontity: {
      url: "https://twentytwenty.frontity.org",
      title: "Test Frontity Blog",
      description: "Useful content for Frontity development",
    },
  },
  packages: [
    "@frontity/tiny-router",
    "@frontity/html2react",
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          colors: {
            primary: "#E6324B",
            headerBg: "#ffffff",
            footerBg: "#ffffff",
            bodyBg: "#f5efe0",
          },
          // Whether to show the search button in page header
          showSearchInHeader: false,
          // Whether to show all post content or only excerpt (summary) in archive view
          showAllContentOnArchive: false,
          // Settings for the featured media (image or video)
          featuredMedia: {
            // Whether to show it on archive view
            showOnArchive: false,
            // Whether to show it on post
            showOnPost: false,
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPreFetch: "no",
          /**
           * At the moment, we only include the ascii characters of Inter font.
           * Values can be "us-ascii" | "latin" | "all"
           */
          fontSets: "us-ascii",
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.io/wp-json",
        },
      },
    },
  ],
};
