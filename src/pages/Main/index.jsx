import React, { useContext, useEffect, useState } from "react";
import InputMask from "react-input-mask";

import { FaSearch, FaSpinner, FaTimes } from "react-icons/fa";

import Container from "../../components/Container";
import Title from "../../components/Title/index";
import { CompanyContext } from "../../context/Company";
import {
  ClearButton,
  Form,
  HistoryHeader,
  HistoryItem,
  HistoryList,
  HomeContainer,
  RemoveItemButton,
  Separator,
  SubmitButton,
} from "./styles";

export default function Main({ history }) {
  const [newCnpj, setNewCnpj] = useState("");
  const [finded, setFinded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [queryHistory, setQueryHistory] = useState([]);

  const { getCompanyData, setCompany } = useContext(CompanyContext);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("queryHistory") || "[]");
    setQueryHistory(stored);
  }, []);

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
    }, 3000);

    setNewCnpj("");

    history.push({ pathname: "/query" });
  }

  async function handleHistoryClick(item) {
    if (item.company) {
      setCompany(item.company);
      history.push({ pathname: "/query" });
    } else {
      setLoading(true);
      await getCompanyData(item.cnpj);
      setLoading(false);
      history.push({ pathname: "/query" });
    }
  }

  function handleClearHistory(e) {
    e.stopPropagation();
    localStorage.removeItem("queryHistory");
    setQueryHistory([]);
  }

  function handleRemoveItem(e, cnpj) {
    e.stopPropagation();
    const filtered = queryHistory.filter((item) => item.cnpj !== cnpj);
    setQueryHistory(filtered);
    localStorage.setItem("queryHistory", JSON.stringify(filtered));
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
            {loading ? (
              <FaSpinner color="#fff" size={25} />
            ) : (
              <FaSearch color="#fff" size={25} />
            )}
          </SubmitButton>
        </Form>
      </Container>
      {queryHistory.length > 0 && (
        <Container>
          <HistoryHeader>
            <Title>Últimas consultas</Title>
            <ClearButton
              type="button"
              onClick={handleClearHistory}
              title="Limpar todas as últimas consultas"
            >
              <FaTimes size={18} />
            </ClearButton>
          </HistoryHeader>
          <HistoryList>
            {queryHistory.map((item, index) => (
              <React.Fragment key={item.cnpj}>
                <HistoryItem onClick={() => handleHistoryClick(item)}>
                  <strong>{item.cnpj}</strong>
                  <span>{item.nome}</span>
                  <RemoveItemButton
                    type="button"
                    onClick={(e) => handleRemoveItem(e, item.cnpj)}
                    title="Remover esta consulta"
                  >
                    <FaTimes size={12} />
                  </RemoveItemButton>
                </HistoryItem>
                {index < queryHistory.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </HistoryList>
        </Container>
      )}
    </HomeContainer>
  );
}
