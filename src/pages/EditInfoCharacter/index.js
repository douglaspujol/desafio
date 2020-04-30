import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { editCharacter } from '../../store/modules/favoritsCharacters/actions';
import Input from './Form/Input';
import TextArea from './Form/Textarea';
import { Content } from './styles';

export default function EditInfoCharacter({ match, history }) {
  const { id } = match.params;
  const character = useSelector(
    state => state.favoriteCharacters.charactersList
  ).find(c => c.id === Number(id));
  const dispatch = useDispatch();
  const imgCharacter = `${character.thumbnail.path}.${character.thumbnail.extension}`;
  const formRef = useRef(null);
  const initialData = {
    name: `${character.name}`,
    description: `${character.description}`,
  };

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        description: Yup.string().required('A descrição é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { name, description } = data;

      dispatch(editCharacter(id, name, description));

      history.push(`/details/${id}`);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Content>
      <div>
        <img src={imgCharacter} alt={character.name} />
      </div>
      <Form ref={formRef} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="name" />
        <TextArea name="description" />
        <button type="submit" className="salvar">
          SALVAR
        </button>
      </Form>
      <Link to={`/details/${id}`}>Voltar</Link>
    </Content>
  );
}
EditInfoCharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
