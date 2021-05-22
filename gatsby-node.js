const axios = require("axios");
const path = require("path");

const get = (endpoint) => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
        query {
          pokeApi {
            pokemons(first: 151) {
              id
              number
              name
              image
              classification
              attacks {
                fast {
                  name
                  type
                  damage
                }
                special {
                  name
                  type
                  damage
                }
              }
            }
          }
        }
      `)
        .then((result) => {
          createPage({
            path: `/`,
            component: require.resolve("./src/templates/all-pokemon/all-pokemon.js"),
            context: { allPokemon: result.data.pokeApi.pokemons },
          });

          result.data.pokeApi.pokemons.forEach((pokemon) => {
            createPage({
              path: `pokemon/${pokemon.name}`,
              component: path.resolve("./src/templates/pokemon/pokemon.js"),
              context: {
                pokemon,
              },
            });
          });
        })
        .catch((error) => console.log(error))
    );
  });
};
