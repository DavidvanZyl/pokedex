import './pokemon.scss';

import { Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../../components/layouts/layout';

const Pokemon = ({ pageContext: { pokemon } }) => (
  <Layout>
    <Helmet>
      <title>{`${pokemon.name} - Pokedex 151`}</title>
    </Helmet>
    <div className="pokemon">
      <h1 className="pokemon__name">{pokemon.name}</h1>
      <p className="pokemon__number">#{pokemon.number}</p>
      <p className="pokemon__desc">{pokemon.classification}</p>
      <img className="pokemon__image" src={pokemon.image} alt={pokemon.name} />
      <h3>Abilities</h3>
      <ul>
        {[...pokemon.attacks.fast, ...pokemon.attacks.special].map(
          (ability) => (
            <li key={ability.name}>
                {ability.name}
            </li>
          )
        )}
      </ul>
      <Link to="/">Back to all Pokémon</Link>
    </div>
  </Layout>
);

export default Pokemon;
