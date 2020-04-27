import React from 'react';
import FavoriteCharacters from './FavoritsCharacters/index';
import { Container, Search, ListCharacters } from './styles';

export default function Main() {
  return (
    <Container>
      <FavoriteCharacters />
      <Search>
        <input placeholder="Pesquise seus personagens" />
        <ListCharacters>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
          <li>
            <div>
              <img
                src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/09/legiao_kO1neyKugo4YIMvWDFxd_GJ8cp0H3itZUbL7SVhAqw.jpg.jpeg"
                alt="Venom"
              />
              <span>Venom</span>
            </div>
            <button type="submit">Add</button>
          </li>
        </ListCharacters>
      </Search>
      <div className="alinhamento" />
    </Container>
  );
}
