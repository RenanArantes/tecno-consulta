import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Container>
        <div style={{display: 'flex', margin: '0 auto'}}> 
          <img alt="Tecnodata" src={logo} />
          <div>
            <h1>Tecnodata</h1>
            <h2>Consulta Receita Federal</h2>
          </div>
        </div>
      </Container>
    </Link>
  );
}
