import './pokemonListItem.scss';
import './pokemonListItem.scss';

import { Link } from 'gatsby';
import React, { memo } from 'react';

const PokemonListItem = memo(({ pokemon, keyId, style }) => (
  <Link
    to={`/pokemon/${pokemon.name}`}
    key={keyId}
    style={style}
    className="pokemonListItem"
  >
    <img
      src={pokemon.image}
      alt={pokemon.name}
      className="pokemonListItem__image"
    />
    <p className="pokemonListItem__name">{pokemon.name}</p>
  </Link>
));

export default PokemonListItem;
