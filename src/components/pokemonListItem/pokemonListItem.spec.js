import { render, screen } from '@testing-library/react';
import React from 'react';

import PokemonListItem from './pokemonListItem';

const defaultProps = {
  pokemon: {
    name: 'myTestPokemon',
    image: 'myTestImage.jpg'
  },
  key: '0-1',
  style: {},
};

const setup = () => {
    render(<PokemonListItem {...defaultProps} />);
}

describe("PokemonListItem", () => {
  it("renders successfully", async () => {
    setup();
    expect(await screen.findByText(defaultProps.pokemon.name)).toBeInTheDocument();
    expect(await screen.findByAltText(defaultProps.pokemon.name)).toBeInTheDocument();
    expect(await (await screen.findByAltText(defaultProps.pokemon.name)).getAttribute("src")).toEqual(defaultProps.pokemon.image);
  });
});