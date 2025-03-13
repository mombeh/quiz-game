import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DataContext = createContext();

export const UseData = ({ children }) => {
  const [tabQuestions, setQuestions] = useState([]);
  const [tabReponse, setTabReponse] = useState([]);
  return (
    <DataContext.Provider
      value={{ tabQuestions, tabReponse, setTabReponse, setQuestions }}
    >
      {children}
    </DataContext.Provider>
  );
};

UseData.propTypes = {
  children: PropTypes.node.isRequired,
};