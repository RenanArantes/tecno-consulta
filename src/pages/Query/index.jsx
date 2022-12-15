import React, { useState, useEffect } from 'react';

import formatValue from '../../utils/formatValue';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

import { Field,FieldList, Value, Separator, QueryContainer } from './styles';

export default function Query(props) {
  const [data, setData] = useState();

  useEffect(() => {
    if (props.history.location.data) {
      localStorage.setItem('dataQuery', JSON.stringify(props.history.location.data));
      setData(props.history.location.data);
    } else {
      setData(JSON.parse(localStorage.getItem('dataQuery')));
    }
  }, [props.history.location.data]);

  return (
    <QueryContainer>
      {data
        ? (
          <div>
            <Container>
              <Title>
                Empresa:
                {data.fantasia ? (
                  <Value>{data.fantasia}</Value>
                ) : (
                  <Value>{data.nome}</Value>
                )}
              </Title>
              <Separator/>
              <Field>
                <span>
                  CNPJ:
                  <Value>{data.cnpj}</Value>
                </span>
                <span >
                  Data de abertura:
                  <Value>{data.abertura}</Value>
                </span>
              </Field>
              <Field>
                <span>
                  Nome empresarial:
                  <Value>{data.nome}</Value>
                </span>
              </Field>
              {data.efr && (
                <Field>
                  <span>
                    EFR:
                    <Value>{data.efr}</Value>
                  </span>
                </Field>
              )}
              <Field>
                <span>
                  Tipo:
                  <Value>{data.tipo}</Value>
                </span>
                <span>
                  Porte:
                  <Value>{data.porte}</Value>
                </span>
              </Field>           
              <Field>
                <span>
                  Natureza jurídica:
                  <Value>{data.natureza_juridica}</Value>
                </span>
              </Field>
            </Container>
            <Container>
              <Subtitle>Atividades</Subtitle>
              <Separator />
              <Field>
                {data.atividade_principal && data.atividade_principal.map((element) => (
                  <Field>
                    <span>
                      Atividade Principal:
                      <Value>{element.code}</Value>
                        -
                      <Value>{element.text}</Value>
                    </span>
                  </Field>
                ))}
              </Field>           
              <Field>
                {data.atividades_secundarias
                  && (
                    <Field>
                      <ul>
                        Atividades Secundárias:
                        {data.atividades_secundarias.map((element) => (
                          <li>
                            CNAE:
                            <Value>{element.code}</Value>
                            -
                            <Value>{element.text}</Value>
                          </li>
                        ))}
                      </ul>
                    </Field>
                  )}
              </Field>
            </Container>
            <Container>
              <Subtitle>
                Endereço
              </Subtitle>
              <Separator />
              <Field>
                <span>
                  Logradouro:
                  <Value>{data.logradouro}</Value>
                </span>
                <span>
                  Numero:
                  <Value>{data.numero}</Value>
                </span>
              </Field>
              {data.complemento
                && (
                  <Field>
                    <span>
                      Complemento:
                      <Value>{data.complemento}</Value>
                    </span>
                  </Field>
                )}
              <Field>
                <span>
                  Bairro:
                  <Value>
                    {data.bairro}
                  </Value>
                </span>
                <span>
                  CEP:
                  <Value>
                    {data.cep}
                  </Value>
                </span>
                <span>
                  UF:
                  <Value>
                    {data.uf}
                  </Value>
                </span>
              </Field>          
            </Container>
            <Container>
              <Subtitle>Contato</Subtitle>
              <Separator />
              <Field>
                {data.telefone && (
                  <span>
                    Telefone:
                    <Value>{data.telefone}</Value>
                  </span>
                )}
              </Field>
              <Field>
                {data.email && (
                  <span>
                    Email:
                    <Value>{data.email}</Value>
                  </span>
                )}
              </Field>
            </Container>
            <Container>
              <Subtitle>Quadro Societário</Subtitle>
              <Separator />
              {data.qsa.length > 0
                && (
                  <FieldList>
                      {data.qsa.map((element) => (
                        <li>
                          <Value>{element.qual}</Value>
                          -
                          <Value>{element.nome}</Value>
                          {element.pais_origem
                            && (
                              <ul>
                                <li>
                                  Sócio estrangeiro - Local:
                                  <Value>{element.pais_origem}</Value>
                                </li>
                                {element.qual_rep_legal
                                  && (
                                    <li>
                                      Representante Legal:
                                      <Value>{element.nome_rep_legal}</Value>
                                      - Posição:
                                      <Value>{element.qual_rep_legal}</Value>
                                    </li>
                                  )}
                              </ul>
                            )}
                        </li>
                      ))}
                  </FieldList>
                )}
              <Field>
                Capital Social:
                <Value>{formatValue(data.capital_social)}</Value>
              </Field>
            </Container>
            <Container>
              <Subtitle>
                Situação:
                <Value>{data.situacao}</Value>
              </Subtitle>
              <Separator />
              <Field>
                <span>
                  Data da situação:
                  <Value>{data.data_situacao}</Value>
                </span>
              </Field>
              <Field>
                <span>
                  Última atualização:
                  <Value>
                    {data.ultima_atualizacao}
                  </Value>
                </span>
                <span>
                  Status:
                  <Value>{data.status}</Value>
                </span>
              </Field>
              
            </Container>
          </div>
        )
        : (
          <Container>
            <Title>Vazio</Title>
          </Container>
        )}
    </QueryContainer>
  );
}
