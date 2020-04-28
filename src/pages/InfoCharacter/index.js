import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, DescriptionCharacter } from './styles';

import ListSeries from './ListSeries/index';

export default function InfoCharacter({ match }) {
  const { id } = match.params;
  const character = useSelector(
    state => state.favoriteCharacters.charactersList
  ).find(c => c.id === Number(id));
  return (
    <Container>
      <div className="img">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
        />
      </div>
      <Link to={`${id}/edit`}>Editar</Link>
      <strong>{character.name}</strong>
      <DescriptionCharacter>
        <strong>Description</strong>
        <p>{character.description}</p>
      </DescriptionCharacter>
      <ListSeries id={Number(character.id)} />
    </Container>
  );
}
InfoCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
