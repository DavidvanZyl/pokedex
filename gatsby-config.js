module.exports = {
  siteMetadata: {
    title: "pokedex",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PokeAPI",
        fieldName: "pokeApi",
        url: "https://graphql-pokemon2.vercel.app/",
      },
    },
  ],
};
