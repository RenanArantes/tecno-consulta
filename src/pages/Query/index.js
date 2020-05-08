import React from 'react';

import Header from '../../components/Header';
import Container from '../../components/Container';

import { Table, TableHeader } from './styles';
import {queries} from '@testing-library/react';

export default function Query(props) {
  const {
    atividade_principal,
    data_situacao,
    complemento,
    nome,
    uf,
    telefone,
    email,
    atividades_secundarias,
    qsa,
    situacao,
    bairro,
    logradouro,
    numero,
    cep,
    municipio,
    porte,
    abertura,
    natureza_juridica,
    fantasia,
    cnpj,
    ultima_atualizacao,
    status,
    tipo,
    efr,
    motivo_situacao,
    situacao_especial,
    data_situacao_especial,
    capital_social,
  } = props.history.location.data;

  return(
    <>
      <Header />
      <Container>
        <ul>
          {atividade_principal.map(element => <li>{element.code} - {element.text}</li>)}
          <li>Data da situação: {data_situacao}</li>
          <li>{complemento}</li>
          <li>{nome}</li>
          <li>{uf}</li>
          <li>{telefone}</li>
          <li>{email}</li>
          {atividades_secundarias.map(element => <li>{element.code} - {element.text}</li>)}
          {qsa.map(element => {
            return (
            <>
              <li>{element.nome} - {element.qual}</li>
              {element.pais_origem ? <li>{element.pais_origem}</li> : null}
              {element.qual_rep_legal ?
                <li>{element.qual_rep_legal} - {element.nome_rep_legal}</li> : null }
            </>
            )
          })}
          <li>{situacao}</li>
          <li>{bairro}</li>
          <li>{logradouro}</li>
          <li>{numero}</li>
          <li>{cep}</li>
          <li>{municipio}</li>
          <li>{porte}</li>
          <li>{abertura}</li>
          <li>{natureza_juridica}</li>
          <li>{fantasia}</li>
          <li>{cnpj}</li>
          <li>{ultima_atualizacao}</li>
          <li>{status}</li>
          <li>{tipo}</li>
          {efr ? <li>{efr}</li> : null}
          {motivo_situacao ? <li>{motivo_situacao}</li> : null}
          {situacao_especial ?
            <>
              <li>{situacao_especial}</li>
              <li>{data_situacao_especial}</li>
            </> : null
          }
          <li>{capital_social}</li>
        </ul>
      </Container>
    </>
  )
}
