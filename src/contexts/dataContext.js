import React, { useState, useEffect, createContext } from "react";

import useCustomFetch from "./../hooks/useCustomFetch";

export const dataContext = createContext(null);

export const DataProvider = props => {
  const [url, setUrl] = useState(null);
  const dataFetch = useCustomFetch(url);
  const { data, loading } = dataFetch;

  useEffect(() => {
    setUrl("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <dataContext.Provider value={{ data, loading }}>
      {props.children}
    </dataContext.Provider>
  );
};
