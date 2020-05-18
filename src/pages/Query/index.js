import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';

import { Table, TableHeader, Title } from './styles';
import { queries } from '@testing-library/react';

export default function Query(props) {
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.history.location.data)
  }, [props.history.location.data])

  console.log(props)

  return(
    <>
      <Header />
      <Container>
        {data ?
        <ul>
          {data.atividade_principal.map(element => <li>Atividade Principal: {element.code} - {element.text}</li>)}
          <li>Data da situação: {data.data_situacao}</li>
          <li>Complemento: {data.complemento}</li>
          <li>Nome da Empresa: {data.nome}</li>
          <li>UF: {data.uf}</li>
          <li>Telefone: {data.telefone}</li>
          <li>Email: {data.email}</li>
          {data.atividades_secundarias.map(element => <li>Atividades Secundarias: {element.code} - {element.text}</li>)}
          {data.qsa.map(element => {
            return (
            <>
              <li>{element.nome} - {element.qual}</li>
              {element.pais_origem ? <li>{element.pais_origem}</li> : null}
              {element.qual_rep_legal ?
                <li>{element.qual_rep_legal} - {element.nome_rep_legal}</li> : null }
            </>
            )
          })}
          <li>Situacao: {data.situacao}</li>
          <li>Bairro: {data.bairro}</li>
          <li>Logradouro: {data.logradouro}</li>
          <li>Numero: {data.numero}</li>
          <li>CEP: {data.cep}</li>
          <li>Municipio: {data.municipio}</li>
          <li>Porte: {data.porte}</li>
          <li>Data de abertura: {data.abertura}</li>
          <li>{data.natureza_juridica}</li>
          <li>{data.fantasia}</li>
          <li>{data.cnpj}</li>
          <li>{data.ultima_atualizacao}</li>
          <li>{data.status}</li>
          <li>{data.tipo}</li>
          {data.efr ? <li>{data.efr}</li> : null}
          {data.motivo_situacao ? <li>{data.motivo_situacao}</li> : null}
          {data.situacao_especial ?
            <>
              <li>{data.situacao_especial}</li>
              <li>{data.data_situacao_especial}</li>
            </> : null
          }
          <li>{data.capital_social}</li>
        </ul>
         :
         <Title>Nome da Empresa</Title>}
      </Container>
    </>
  )
}
