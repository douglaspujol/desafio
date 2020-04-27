import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FormCharacter } from './styles';

export default function EditInfoCharacter() {
  return (
    <Container>
      <div className="img">
        <img
          src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
          alt=""
        />
      </div>

      <FormCharacter>
        <input type="text" placeholder="Nome" />
        <input type="text" placeholder="Descrição bem bacana" />
        <Link to="/details/2">Salvar</Link>
      </FormCharacter>
      <Link to="/details/2">Voltar</Link>
    </Container>
  );
}
