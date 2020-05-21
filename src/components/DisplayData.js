import React from "react";

const DisplayData = ({ boxTitle, loading, data }) => {
  return (
    <div className="data-container">
      {loading && !data && <div>Loading...</div>}
      {!loading && <h2>{boxTitle}</h2>}
      {!loading &&
        data &&
        data.map(item => (
          <div className="data-field" key={!item.id ? item._id : item.id}>
            <h3>{!item.name ? item.title : item.name}</h3>
            <p>{!item.email ? item.content : item.email}</p>
          </div>
        ))}
    </div>
  );
};

export default DisplayData;
