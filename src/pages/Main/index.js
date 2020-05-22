import React, { useState, useEffect, useCallback } from 'react';
import InputMask from "react-input-mask";
import { Link } from 'react-router-dom';
import jsonpAdapter from 'axios-jsonp';

import { FaSearch, FaSpinner } from 'react-icons/fa';

import apiRF from '../../services/apiRF';
import formatCnpj from '../../utils/formatCnpj';

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

      const response = await apiRF.get(`https://www.receitaws.com.br/v1/cnpj/${formatCnpj(newCnpj)}`, {
        adapter: jsonpAdapter
      });

      setNewCnpj('');
      setCnpj(response.data);
      setLoading(false);

      history.push({
        pathname: "/tecno-consulta/query",
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
          <InputMask
            mask="99.999.999/9999-99"
            type="text"
            placeholder="Digite aqui um CNPJ"
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
