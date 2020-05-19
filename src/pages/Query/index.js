import React, { useState, useEffect } from 'react';

import formatValue from '../../utils/formatValue'

import Header from '../../components/Header';
import Container from '../../components/Container';

import { Title, Value, Field } from './styles';

export default function Query(props) {
  const [data, setData] = useState()

  useEffect(() => {
    if(props.history.location.data) {
      localStorage.setItem('dataQuery', JSON.stringify(props.history.location.data))
      setData(props.history.location.data)
    } else {
      setData(JSON.parse(localStorage.getItem('dataQuery')))
    }
  }, [props.history.location.data])

  console.log(props)

  return(
    <>
      <Header />
      {data ?
        <>
          <Container>
            <h1>Empresa: {data.fantasia}</h1>
            <hr/>
            <Field>
              CNPJ: <Value>{data.cnpj}</Value> Data de abertura: <Value>{data.abertura}</Value>
            </Field>
            <br/>
            <Field>
              Nome empresarial: <Value>{data.nome}</Value>
            </Field>
            {data.efr ? <><br/> <Field>EFR: <Value>{data.efr}</Value></Field> </>: null}
            <br/>
            <Field>
              Tipo: <Value>{data.tipo}</Value> Porte: <Value>{data.porte}</Value>
            </Field>
            <br/>
            <Field>
              Natureza jurídica: <Value>{data.natureza_juridica}</Value>
            </Field>
          </Container>
          <Container>
            <h1>Atividades</h1>
            <hr/>
            <Field>
              {data.atividade_principal.map(element =>
                <Field>
                  Atividade Principal: <Value>{element.code}</Value> - <Value>{element.text}</Value>
                </Field>
              )}
            </Field>
            <br/>
            <Field>
              {data.atividades_secundarias ?
                <Field> Atividades Secundárias:
                  {data.atividades_secundarias.map(element =>
                    <>
                      <li>
                        CNAE: <Value>{element.code}</Value> - <Value>{element.text}</Value>
                      </li>
                    </>
                  )}
                </Field>
                : null
                }
            </Field>
          </Container>
          <Container>
            <h1>
              Endereço
            </h1>
            <hr/>
            <Field>
              Logradouro: <Value>{data.logradouro}</Value> Numero: <Value>{data.numero}</Value>
            </Field>
            {data.complemento ?
              <>
                <br/>
                <Field>
                  Complemento: <Value>{data.complemento}</Value>
                </Field>
              </>
              : null
            }
            <br/>
            <Field>
              Bairro: <Value>{data.bairro} </Value>
              CEP: <Value>{data.cep} </Value>
              UF: <Value>{data.uf} </Value>
            </Field>
          </Container>
          { data.telefone && data.email ?
              <Container>
                <h1>Contato</h1>
                <hr/>
                <Field>
                  {data.telefone ? <>Telefone: <Value>{data.telefone}</Value> <br/></> : null }
                </Field>
                <Field>
                  {data.email ? <>Email: <Value>{data.email}</Value> <br/></> : null }
                </Field>
              </Container>
              : null
            }
          <Container>
            <h1>Quadro Societário</h1>
            <hr/>
            <Field>
            <ol>
              {data.qsa.map(element => {
                return (
                  <li>
                    <Value>{element.qual}</Value> - <Value>{element.nome}</Value>
                    {element.pais_origem ?
                      <ul className="estrangeiro">
                        <li>
                          Sócio estrangeiro - Local: <Value>{element.pais_origem}</Value>
                        </li>
                        {element.qual_rep_legal ?
                          <li>
                            Representante Legal: <Value>{element.nome_rep_legal}</Value> - Posição: <Value>{element.qual_rep_legal}</Value>
                          </li> : null
                        }
                      </ul> : null
                    }
                  </li>
                )
              })}
            </ol>
            </Field>
            <br/>
            <Field>
              Capital Social: <Value>{formatValue(data.capital_social)}</Value>
            </Field>
          </Container>
          <Container>
            <h1>Situação: <Value>{data.situacao}</Value></h1>
            <hr/>
            <Field>
              Data da situação: <Value>{data.data_situacao}</Value>
            </Field>
            <br/>
            <Field>
              Última atualização: <Value>{data.ultima_atualizacao} </Value>
              Status: <Value>{data.status}</Value>
            </Field>
          </Container>
          {/* <Container>
            <ul>



              {data.motivo_situacao ? <li>Motivo{data.motivo_situacao}</li> : null}
              {data.situacao_especial ?
                <>
                  <li>Situacao especial: {data.situacao_especial}</li>
                  <li>Data da situacao especial: {data.data_situacao_especial}</li>
                </> : null
              }
            </ul>
          </Container> */}
        </>
      :
        <Container>
          <Title>Vazio</Title>
        </Container>
      }
    </>
  )
}
