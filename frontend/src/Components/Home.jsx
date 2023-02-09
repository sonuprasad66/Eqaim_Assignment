import React, { useState } from "react";

export const Home = () => {
  const [inputData, setInputData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <p>Step Addition</p>
        </div>
        <div className="main-box">
          <div className="input-box">
            <form onSubmit={handleSubmit}>
              <div className="first">
                <label id="first-label">First Number:</label>
                <input
                  type="number"
                  name="first_number"
                  onChange={handleChange}
                />
              </div>

              <div className="second">
                <label id="second-label">Second Number:</label>
                <input
                  type="number"
                  name="second_number"
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Generate Steps</button>
            </form>
          </div>
          <div className="result-container">
            <div className="result-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
