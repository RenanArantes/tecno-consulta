import React, { useState, useEffect, useCallback, useContext } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';
import jsonpAdapter from 'axios-jsonp';

import { FaSearch, FaSpinner } from 'react-icons/fa';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { Form, HomeContainer, SubmitButton } from './styles';
import Title from '../../components/Title/index';
import { CompanyContext } from '../../context/Company';

export default function Main({ history }) {
  const [cnpj, setCnpj] = useState('');
  const [newCnpj, setNewCnpj] = useState('');
  const [finded, setFinded] = useState(true);
  const [loading, setLoading] = useState(false);

  const { getCompanyData } = useContext(CompanyContext)

  function handleInputChange(e) {
    setNewCnpj(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setFinded(false);

    await getCompanyData(newCnpj);
    
    setTimeout(function () { 
      setLoading(false);
      setFinded(true);
    }, 3000)

    setNewCnpj('');
    

    history.push({
      pathname: '/query'
    });
  }

  return (
    <HomeContainer>
      <Container>
        <Title>CNPJ</Title>
        <Form onSubmit={handleSubmit} finded={finded}>
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            placeholder="Digite aqui um CNPJ"
            value={newCnpj}
            onChange={handleInputChange}
          />
          <SubmitButton loading={loading}>
            { loading
              ? <FaSpinner color="#fff" size={25} />
              : <FaSearch color="#fff" size={25} />}
          </SubmitButton>
        </Form>
      </Container>
    </HomeContainer>
  );
}
