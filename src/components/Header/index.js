import React from 'react';
import { Link } from 'react-router-dom';

// Logo Marvel
import logoMarvel from '../../assets/logoMarvel.svg';

import { HeaderStyle } from './styles';

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <img src={logoMarvel} alt="" />
      </Link>
    </HeaderStyle>
  );
}
