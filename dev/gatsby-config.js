module.exports = {
  siteMetadata: {
    title: `DASCO UNJ`,
    author: {
      name: `Data Science Community UNJ`,
    },
    description:
      `Kelompok studi data science di UNJ yang membantu mahasiswa UNJ ` +
      `terutama pada program studi statistik dalam mempersiapkan diri untuk mulai berkarir ` +
      `sebagai Data Scientist.`,
    siteUrl: `https://dascounj.github.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-X5TNZGN8DR"],
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        main: `${__dirname}/src`,
        components: `${__dirname}/src/components`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DASCO UNJ`,
        short_name: `DASCO`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `src/media/images/icon.png`,
      },
    },
  ],
};
