import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FavoritsCharactersList } from './styles';

export default function FavoritsCharacters() {
  return (
    <Container>
      <FavoritsCharactersList>
        <li>
          <Link to="/details/1">
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt=""
              />
            </div>
            <span>Venom</span>
          </Link>
        </li>
        <li>
          <Link to="/details/1">
            <div>
              <img
                src="https://i.pinimg.com/originals/13/42/d9/1342d919e721b2e361e1adf0b6a8e298.jpg"
                alt=""
              />
            </div>
            <span>HOMEM ARANHA MANEIRO</span>
          </Link>
        </li>
        <li>
          <Link to="/details/1">
            <div>
              <img
                src="https://i.pinimg.com/originals/13/42/d9/1342d919e721b2e361e1adf0b6a8e298.jpg"
                alt=""
              />
            </div>
            <span>HOMEM ARANHA MANEIRO</span>
          </Link>
        </li>
        <li>
          <Link to="/details/1">
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt=""
              />
            </div>
            <span>Venom</span>
          </Link>
        </li>
      </FavoritsCharactersList>
    </Container>
  );
}
