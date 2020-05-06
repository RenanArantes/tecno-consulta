import React, { Component } from 'react';
import { FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import Container from '../../components/Container';
import { Content, Form, SubmitButton } from './styles';

export default class Main extends Component {
  state = {
    cnpj:'',
    newCnpj: '',
    finded: true,
    loading: false,
  }

  handleInputChange= e => {
    if(e.target.value === ".") {
      console.log(!!e.target.value === ".")
      this.setState({ newCnpj: 'a'});
    } else {
      this.setState({ newCnpj: e.target.value})
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({loading: true, finded: false})

    try {
      const { newCnpj } = this.state;

      if(newCnpj === '') throw 'Voce precisa digitar um CNPJ';

      const response = await api.get(`/${newCnpj}`);

      this.setState = {
        newCnpj: '',
        cnpj: response.data
      }
    } catch(error) {
      this.setState({finded: true});
    } finally {
      this.setState({loading: false});
    }

  }

  render() {
    const { newCnpj, loading, finded } = this.state;

    return(
      <>
        <div>
          <h1>
            Tecnodata
          </h1>
        </div>
        <Container>
          <Form finded={finded}>
            <input
              type="number"
              placeholder="Digite aqui o numero do CNPJ"
              pattern="[0-9]"
              max="14"
              value={newCnpj}
              onChange={this.handleInputChange}
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
}
