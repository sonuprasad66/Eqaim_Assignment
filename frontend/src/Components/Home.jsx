import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [inputData, setInputData] = useState({});
  const printResult = document.getElementById("result-box");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const postData = (data) => {
    return axios
      .post("https://eqaim.onrender.com/form-data", data)
      .then((res) => {
        // console.log(res);
        printResult.innerHTML = JSON.stringify(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(inputData);
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
                  required
                  type="number"
                  name="first_number"
                  onChange={handleChange}
                />
              </div>

              <div className="second">
                <label id="second-label">Second Number:</label>
                <input
                  required
                  type="number"
                  name="second_number"
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Generate Steps</button>
            </form>
          </div>
          <div className="result-container">
            <div id="result-box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
