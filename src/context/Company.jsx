import { createContext, useEffect, useState } from "react";

export const CompanyContext = createContext();

export function CompanyContextProvider({ children }) {
  const [company, setCompany] = useState();

  return (
    <CompanyContext.Provider value={{company}} >
      {children}
    </CompanyContext.Provider>
  )
}