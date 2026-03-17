import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

import Container from "../../components/Container";
import Title from "../../components/Title";
import { RateLimitContent, RateLimitMessage, BackLink } from "./styles";

export default function RateLimit() {
  return (
    <Container>
      <RateLimitContent>
        <FaExclamationTriangle size={48} color="#aa000b" />
        <Title>Muitas consultas realizadas</Title>
        <RateLimitMessage>
          A API da Receita Federal limitou temporariamente as requisições.
          Aguarde alguns minutos antes de tentar novamente.
        </RateLimitMessage>
        <BackLink to="/">Voltar à página inicial</BackLink>
      </RateLimitContent>
    </Container>
  );
}
