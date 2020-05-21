import React, { useState, useContext } from "react";

import useCustomFetch from "./../hooks/useCustomFetch";
import { dataContext } from "./../contexts/dataContext";
import DisplayData from "./../components/DisplayData";

import "./../App.css";

const App = () => {
  const { data, loading } = useContext(dataContext);

  const [url, setUrl] = useState(null);
  const dataFetch = useCustomFetch(url);
  const { data: buttonFetchData, loading: buttonFetchLoading } = dataFetch;

  const [toggle, setToggle] = useState(false);

  function handleFetch() {
    setUrl("https://sheltered-earth-84596.herokuapp.com/articles");
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="homepage-app-header">
          <div style={{ width: "400px" }}>
            {/* {!loading && !buttonFetchData && (
              <button onClick={handleFetch}>Fetch Data One</button>
            )} */}
            <button className={!toggle ? "get" : "exit"} onClick={handleFetch}>
              {!toggle ? "Get Data" : "Exit"}
            </button>
            {toggle && (
              <DisplayData
                boxTitle="Fetched by Click"
                data={buttonFetchData}
                loading={buttonFetchLoading}
              />
            )}
          </div>
          <DisplayData
            boxTitle="Fetched from Context"
            data={data}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
