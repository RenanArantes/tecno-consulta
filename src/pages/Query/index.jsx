import React, { useState, useEffect, useContext } from 'react';

import formatValue from '../../utils/formatValue';

import Container from '../../components/Container';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

import { Field,FieldList, Value, Separator, QueryContainer } from './styles';
import { CompanyContext } from '../../context/Company';

export default function Query(props) {
  const [data, setData] = useState();

  const { company } = useContext(CompanyContext)

  console.log(company)

  return (
    <QueryContainer>
      {company
        ? (
          <div>
            <Container>
              <Title>
                Empresa:
                {company.fantasia ? (
                  <Value>{company.fantasia}</Value>
                ) : (
                  <Value>{company.nome}</Value>
                )}
              </Title>
              <Separator/>
              <Field>
                <span>
                  CNPJ:
                  <Value>{company.cnpj}</Value>
                </span>
                <span >
                  Data de abertura:
                  <Value>{company.abertura}</Value>
                </span>
              </Field>
              <Field>
                <span>
                  Nome empresarial:
                  <Value>{company.nome}</Value>
                </span>
              </Field>
              {company.efr && (
                <Field>
                  <span>
                    EFR:
                    <Value>{company.efr}</Value>
                  </span>
                </Field>
              )}
              <Field>
                <span>
                  Tipo:
                  <Value>{company.tipo}</Value>
                </span>
                <span>
                  Porte:
                  <Value>{company.porte}</Value>
                </span>
              </Field>           
              <Field>
                <span>
                  Natureza jurídica:
                  <Value>{company.natureza_juridica}</Value>
                </span>
              </Field>
            </Container>
            <Container>
              <Subtitle>Atividades</Subtitle>
              <Separator />
              <Field>
                {company.atividade_principal && company.atividade_principal.map((element) => (
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
                {company.atividades_secundarias
                  && (
                    <Field>
                      <ul>
                        Atividades Secundárias:
                        {company.atividades_secundarias.map((element) => (
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
                  <Value>{company.logradouro}</Value>
                </span>
                <span>
                  Numero:
                  <Value>{company.numero}</Value>
                </span>
              </Field>
              {company.complemento
                && (
                  <Field>
                    <span>
                      Complemento:
                      <Value>{company.complemento}</Value>
                    </span>
                  </Field>
                )}
              <Field>
                <span>
                  Bairro:
                  <Value>
                    {company.bairro}
                  </Value>
                </span>
                <span>
                  CEP:
                  <Value>
                    {company.cep}
                  </Value>
                </span>
                <span>
                  UF:
                  <Value>
                    {company.uf}
                  </Value>
                </span>
              </Field>          
            </Container>
            <Container>
              <Subtitle>Contato</Subtitle>
              <Separator />
              <Field>
                {company.telefone && (
                  <span>
                    Telefone:
                    <Value>{company.telefone}</Value>
                  </span>
                )}
              </Field>
              <Field>
                {company.email && (
                  <span>
                    Email:
                    <Value>{company.email}</Value>
                  </span>
                )}
              </Field>
            </Container>
            <Container>
              <Subtitle>Quadro Societário</Subtitle>
              <Separator />
              {company.qsa.length > 0
                && (
                  <FieldList>
                      {company.qsa.map((element) => (
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
                <Value>{formatValue(company.capital_social)}</Value>
              </Field>
            </Container>
            <Container>
              <Subtitle>
                Situação:
                <Value>{company.situacao}</Value>
              </Subtitle>
              <Separator />
              <Field>
                <span>
                  Data da situação:
                  <Value>{company.company_situacao}</Value>
                </span>
              </Field>
              <Field>
                <span>
                  Última atualização:
                  <Value>
                    {company.ultima_atualizacao}
                  </Value>
                </span>
                <span>
                  Status:
                  <Value>{company.status}</Value>
                </span>
              </Field>
              
            </Container>
          </div>
        )
        : (
          <Container>
            <a href="/tecno-consulta/">
              <Title>Volte a página inicial e pesquise um CNPJ</Title>
            </a>
          </Container>
        )}
    </QueryContainer>
  );
}
