import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, FavoritsCharactersList } from './styles';

export default function FavoritsCharacters() {
  const characters = useSelector(
    state => state.favoriteCharacters.charactersList
  );

  return (
    <Container>
      <FavoritsCharactersList>
        {characters.length > 0 &&
          characters.map(character => (
            <li key={character.id}>
              <Link to={`/details/${character.id}`}>
                <div>
                  <img
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    alt=""
                  />
                </div>
                <span>{character.name}</span>
              </Link>
            </li>
          ))}
      </FavoritsCharactersList>
    </Container>
  );
}
