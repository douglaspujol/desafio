import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Textarea } from '@rocketseat/unform';

import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { editCharacter } from '../../store/modules/favoritsCharacters/actions';

import { Content } from './styles';

export default function EditInfoCharacter({ match, history }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const characterData = useSelector(
    state => state.favoriteCharacters.charactersList
  ).find(c => c.id === Number(id));

  const { nameChar, thumbnail } = characterData;
  const imgCharacter = `${thumbnail.path}.${thumbnail.extension}`;

  function handleSubmit(data) {
    characterData.name = data.name;
    characterData.description = data.description;
    dispatch(editCharacter(characterData));
    history.push(`/details/${id}`);
  }

  return (
    <Content>
      <div>
        <img src={imgCharacter} alt={nameChar} />
      </div>

      <Form onSubmit={handleSubmit} initialData={characterData}>
        <Input name="name" className="name" />

        <Textarea name="description" className="description" />

        <button type="submit" className="salvar">
          SALVAR
        </button>
        <Link to={`/details/${id}`} className="voltar">
          Voltar
        </Link>
      </Form>
    </Content>
  );
}
