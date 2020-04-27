import React from 'react';
import { Link } from 'react-router-dom';
import { Container, DescriptionCharacter } from './styles';
import ListSeries from './ListSeries/index';

export default function InfoCharacter() {
  return (
    <Container>
      <div className="img">
        <img
          src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
          alt=""
        />
      </div>
      <Link to="/details/1/edit">Editar</Link>
      <strong>Venom</strong>
      <DescriptionCharacter>
        <strong>Description</strong>
        <p>
          One of Spider-Man's oldest enemies, Mac Gargan has recently abandoned
          his Scorpion suit and identity and bonded with the alien symbiote that
          had previously been hosted by Peter Parker and Eddie Brock, becoming
          the new Venom.
        </p>
      </DescriptionCharacter>
      <ListSeries />
    </Container>
  );
}
