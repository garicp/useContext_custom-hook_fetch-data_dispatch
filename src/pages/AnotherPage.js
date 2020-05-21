import React, { useContext } from "react";

import { dataContext } from "./../contexts/dataContext";
import DisplayData from "./../components/DisplayData";

import "./../App.css";

const AnotherPage = () => {
  const { data, loading } = useContext(dataContext);

  return (
    <div className="App">
      <div className="App-header">
        <h1>Page 2</h1>
        <DisplayData data={data} loading={loading} />
      </div>
    </div>
  );
};

export default AnotherPage;
