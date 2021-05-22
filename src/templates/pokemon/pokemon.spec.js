import { render, screen } from '@testing-library/react';
import React from 'react';

import Pokemon from './pokemon';

const defaultProps = {
  pokemon: {
    name: 'myTestPokemon',
    image: 'myTestImage.jpg',
    number: '007',
    classification: 'Bond, James',
    attacks: {
      fast: [ { name: 'aston' } ],
      special: [ { name: 'martini' } ]
    },
  },
};

const setup = () => {
    render(<Pokemon pageContext={{ pokemon: defaultProps.pokemon }} />);
}

describe("PokemonListItem", () => {
  it("renders all details successfully", () => {
    setup();
    expect(screen.getByText(defaultProps.pokemon.name)).toBeInTheDocument();
    expect(screen.getByText(`#${defaultProps.pokemon.number}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.pokemon.classification)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.pokemon.attacks.fast[0].name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.pokemon.attacks.special[0].name)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.pokemon.name).getAttribute("src")).toEqual(defaultProps.pokemon.image);
  });

  it("renders a link back to the main list", () => {
    setup();
    expect(screen.getByRole('link', { name: /Back to all Pokémon/i })).toBeInTheDocument();
  });
});