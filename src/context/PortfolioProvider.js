import { useState } from "react";
import PortfolioContext from "./PortfolioContext";

export default function PortfolioProvider({ children }) {
  const [letterClass, setLetterClass] = useState('text-animate');

  const portfolioState = {
    letterClass,
    setLetterClass,
  }

  return (
    <PortfolioContext.Provider value={ portfolioState }>
      { children }
    </PortfolioContext.Provider>
  )
}
