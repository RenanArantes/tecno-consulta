import { createContext, useEffect, useState } from "react";
import jsonpAdapter from 'axios-jsonp';
import apiRF from '../services/apiRF';
import formatCnpj from '../utils/formatCnpj';

export const CompanyContext = createContext();

export function CompanyContextProvider({ children }) {
  const [company, setCompany] = useState();

  async function getCompanyData(cnpj) {
    if (cnpj === '') throw 'Voce precisa digitar um CNPJ';

    try {
      const response = await apiRF.get(`https://www.receitaws.com.br/v1/cnpj/${formatCnpj(cnpj)}`, {
        adapter: jsonpAdapter,
      });

      if (response.data?.status === 429) {
        const rateLimitError = new Error('Rate limit exceeded');
        rateLimitError.status = 429;
        throw rateLimitError;
      }

      setCompany(response.data);

      const entry = {
        cnpj: formatCnpj(cnpj),
        nome: response.data.nome,
        company: response.data,
      };
      const stored = JSON.parse(localStorage.getItem('queryHistory') || '[]');
      const index = stored.findIndex((item) => item.cnpj === entry.cnpj);
      if (index >= 0) {
        stored[index] = entry;
      } else {
        stored.unshift(entry);
      }
      localStorage.setItem('queryHistory', JSON.stringify(stored.slice(0, 10)));
    } catch (error) {
      if (error.response?.status === 429) {
        const rateLimitError = new Error('Rate limit exceeded');
        rateLimitError.status = 429;
        throw rateLimitError;
      }
      throw error;
    }
  }

  return (
    <CompanyContext.Provider value={{ company, getCompanyData, setCompany }} >
      {children}
    </CompanyContext.Provider>
  )
}