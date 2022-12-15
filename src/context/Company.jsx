import { createContext, useEffect, useState } from "react";
import jsonpAdapter from 'axios-jsonp';
import apiRF from '../services/apiRF';
import formatCnpj from '../utils/formatCnpj';

export const CompanyContext = createContext();

export function CompanyContextProvider({ children }) {
  const [company, setCompany] = useState();

  async function getCompanyData(cnpj) {
    if (cnpj === '') throw 'Voce precisa digitar um CNPJ';

    const response = await apiRF.get(`https://www.receitaws.com.br/v1/cnpj/${formatCnpj(cnpj)}`, {
      adapter: jsonpAdapter,
    });

    setCompany(response.data);
  }

  return (
    <CompanyContext.Provider value={{ company, getCompanyData }} >
      {children}
    </CompanyContext.Provider>
  )
}