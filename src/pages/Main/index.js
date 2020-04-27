import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteCharacters from './FavoritsCharacters/index';
import { Container, Search, ListCharacters } from './styles';
import api from '../../services/api';
import { addCharacterToList } from '../../store/modules/favoritsCharacters/actions';

export default function Main() {
  const [nameCharacter, setNameCharacter] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const dispatch = useDispatch();
  const charactersList = useSelector(
    state => state.favoriteCharacters.charactersList
  );

  useEffect(() => {
    async function loadCharacters() {
      const response = await api.get('v1/public/characters', {
        params: {
          nameStartsWith: nameCharacter,
        },
      });

      const { results } = response.data.data;
      setQueryResults(results);
    }

    if (nameCharacter !== '') {
      loadCharacters();
    }
  }, [nameCharacter]);

  function handleSearch(string) {
    const { value } = string.target;
    if (value.length >= 3) {
      setNameCharacter(value);
    } else {
      setQueryResults([]);
    }
  }
  function handleAddCharacter(id) {
    const findId = !!charactersList.find(c => c.id === id);
    if (!findId) {
      const character = queryResults.find(c => c.id === id);
      dispatch(addCharacterToList(character));
    }
  }

  return (
    <Container>
      <FavoriteCharacters />
      <Search>
        <input
          placeholder="Pesquise seus personagens"
          onChange={handleSearch}
        />
        <ListCharacters>
          {queryResults.length !== 0 &&
            queryResults.map(result => (
              <li key={result.id}>
                <div>
                  <img
                    src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
                    alt={result.name}
                  />
                  <span>{result.name}</span>
                </div>
                <button
                  type="submit"
                  onClick={() => handleAddCharacter(result.id)}
                >
                  Add
                </button>
              </li>
            ))}
        </ListCharacters>
      </Search>
      <div className="alinhamento" />
    </Container>
  );
}
