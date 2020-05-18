import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import jsonpAdapter from 'axios-jsonp';

import apiRF from '../../services/apiRF';

import Header from '../../components/Header';
import Container from '../../components/Container';
import { Content, Form, SubmitButton } from './styles';

export default function Main({ history }) {

  const [cnpj, setCnpj] = useState('');
  const [newCnpj, setNewCnpj] = useState('');
  const [finded, setFinded] = useState(true);
  const [loading, setLoading] = useState(false)

  function handleInputChange(e) {
      setNewCnpj(e.target.value)
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setFinded(false);

    try {
      if(newCnpj === '') throw 'Voce precisa digitar um CNPJ';

      const response = await apiRF.get(`https://www.receitaws.com.br/v1/cnpj/${newCnpj}`, {
        adapter: jsonpAdapter
      });

      console.log(response.data)

      setNewCnpj('');
      setCnpj(response.data);
      setLoading(false);

      history.push({
        pathname: "/query",
        data: response.data,
      });
    } catch(error) {
      setLoading(false);
    }
  }

  return(
    <>
      <Header />
      <Container>
        <h1>CNPJ</h1>
        <Form onSubmit={handleSubmit} finded={finded}>
          <input
          type="number"
          placeholder="Digite aqui o numero do CNPJ"
          pattern="[0-9]"
          value={newCnpj}
          onChange={handleInputChange}
          />
          <SubmitButton loading={loading}>
            { loading ?
              <FaSpinner color="#fff" size={25}/> :
              <FaSearch color="#fff" size={25}/>
            }
          </SubmitButton>
        </Form>
      </Container>
    </>
  )
}
