module.exports = {
    siteMetadata: {
        title: `Jose Tavares`,
        description: `Jose Tavares Website`,
        author: `Jose Tavares`,
        siteUrl: `https://www.josetavares.me`
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jose Tavares`,
                short_name: `Jose Tavares`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#23a6d5`,
                display: `fullscreen`
            }
        },
        `gatsby-plugin-less`,
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [{ family: `Jua` }],
                display: "swap"
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GA
            }
        },
        `gatsby-plugin-netlify`
    ]
};
