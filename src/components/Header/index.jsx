import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import logo from '../../assets/logo.png';

import { Container, BackButton } from './styles';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Container>
      {!isHome && (
        <BackButton to="/">
          <FaArrowLeft size={22} />
        </BackButton>
      )}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img alt="Tecnodata" src={logo} />
          <div style={{ color: 'white' }}>
            <h1>Tecnodata</h1>
            <h2>Consulta Receita Federal</h2>
          </div>
        </div>
      </Link>
    </Container>
  );
}
