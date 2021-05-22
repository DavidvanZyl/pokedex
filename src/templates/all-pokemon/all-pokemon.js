import './all-pokemon.scss';

import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { AutoSizer, Grid } from 'react-virtualized';

import Layout from '../../components/layouts/layout';
import PokemonListItem from '../../components/pokemonListItem/pokemonListItem';

const AllPokemon = ({ pageContext: { allPokemon } }) => {
  const ROW_HEIGHT = 200;
  const COLUMN_WIDTH = 200;
  const MAX_COLUMNS = 4;
  const MIN_COLUMNS = 1;

  const [ref, setRef] = useState(null);
  const [columnCount, setColumnCount] = useState(1);
  const [filteredPokemon, setFilteredPokemon] = useState(null);

  useEffect(() => {
    ref && ref.forceUpdate();
    return () => {
      setRef(null);
    };
  }, [columnCount]);

  const getPokemonList = useCallback(
    () => filteredPokemon ? filteredPokemon : allPokemon,
    [filteredPokemon, allPokemon],
  );

  const handleOnResize = ({ width }) => {
    setColumnCount(Math.max(MIN_COLUMNS, Math.min(Math.floor(width / COLUMN_WIDTH), MAX_COLUMNS)));
  }

  const handleSearch = debounce(event => {
    if(event.target.value) {
      setFilteredPokemon(allPokemon.filter(({ name }) => name.toLowerCase().includes(event.target.value.toLowerCase())));
    } else {
      setFilteredPokemon(null);
    }
  }, 200);

  const cellRenderer = ({ columnIndex, rowIndex, style, keyId }) => {
    const gridIndex = rowIndex * columnCount + columnIndex;
    if (gridIndex >= getPokemonList().length) return null;
    return (
      <PokemonListItem
        keyId={keyId}
        pokemon={getPokemonList()[rowIndex * columnCount + columnIndex]}
        style={style}
      />
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>Pokedex 151</title>
      </Helmet>
      <div className="allPokemon">
        <div className="allPokemon__search" data-testid="allPokemon-search">
          <label htmlFor="name">
            Search By Name:
            <input name="name" id="name" type="search" onChange={handleSearch} />
          </label>
          {filteredPokemon && <p className="allPokemon__search__resultsCount">{filteredPokemon.length} results found.</p>}
        </div>
        <div className="allPokemon__list" data-testid="allPokemon-list">
          <AutoSizer onResize={handleOnResize}>
            {({ width, height }) => {
              return (
                <Grid
                  ref={setRef}
                  columnCount={columnCount}
                  rowCount={Math.ceil(getPokemonList().length / columnCount)}
                  rowHeight={ROW_HEIGHT}
                  columnWidth={COLUMN_WIDTH}
                  width={width}
                  height={height}
                  cellRenderer={cellRenderer}
                />
              );
            }}
          </AutoSizer>
        </div>
      </div>
    </Layout>
  );
};

export default AllPokemon;
