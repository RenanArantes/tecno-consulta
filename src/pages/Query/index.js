import React, { useState, useEffect } from 'react';

import formatValue from '../../utils/formatValue'

import Header from '../../components/Header';
import Container from '../../components/Container';

import { Title, Value, Field } from './styles';

export default function Query(props) {
  const [data, setData] = useState()

  useEffect(() => {
    setData(props.history.location.data)
  }, [props.history.location.data])

  console.log(props)

  return(
    <>
      <Header />
      {data ?
        <>
          <Title>{data.fantasia}</Title>
          <Container>
            <h1>Empresa</h1>
            <hr/>
            <label>
              <Field>
                CNPJ: <Value>{data.cnpj}</Value> Data de abertura: <Value>{data.abertura}</Value>
              </Field>
            </label>

            <Field>
              Nome empresarial: <Value>{data.nome}</Value> Tipo: <Value>{data.tipo}</Value>
            </Field>
          </Container>
          <Container>
            <ul>
            {data.atividade_principal.map(element => <li>Atividade Principal: {element.code} - {element.text}</li>)}
            <li>Complemento: {data.complemento}</li>
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
            <li>Data da situação: {data.data_situacao}</li>
            <li>Situacao: {data.situacao}</li>
            <li>Bairro: {data.bairro}</li>
            <li>Logradouro: {data.logradouro}</li>
            <li>Numero: {data.numero}</li>
            <li>CEP: {data.cep}</li>
            <li>Municipio: {data.municipio}</li>
            <li>Porte: {data.porte}</li>
            <li>Natureza juridica: {data.natureza_juridica}</li>
            <li>Ultima atualizacao: {data.ultima_atualizacao}</li>
            <li>Status: {data.status}</li>
            <li>Tipo: {data.tipo}</li>
            {data.efr ? <li>EFR: {data.efr}</li> : null}
            {data.motivo_situacao ? <li>Motivo{data.motivo_situacao}</li> : null}
            {data.situacao_especial ?
              <>
                <li>Situacao especial: {data.situacao_especial}</li>
                <li>Data da situacao especial: {data.data_situacao_especial}</li>
              </> : null
            }
            <li>Capital Social: {formatValue(data.capital_social)}</li>
          </ul>
          </Container>
        </>
      :
        <Container>
          <Title>Vazio</Title>
        </Container>
      }
    </>
  )
}
