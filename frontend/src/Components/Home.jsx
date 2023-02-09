import React, { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [inputData, setInputData] = useState({
    first_number: 0,
    second_number: 0,
  });
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

    const check = /^[0-9\b]+&/;
    let fn = Number(inputData.first_number);
    let sn = Number(inputData.second_number);

    if (fn < 0 || fn == "") {
      alert("please enter a valid number in input box-1");
    } else if (sn < 0 || sn == "") {
      alert("please enter a valid number in input box-2");
    } else if (isNaN(fn)) {
      alert("please enter a number in input box-1");
    } else if (isNaN(sn)) {
      alert("please enter a number in input box-2");
    } else if (check.test(fn)) {
      alert("please enter a number in input box-1");
    } else if (check.test(sn)) {
      alert("please enter a number in input box-2");
    } else {
      // console.log(inputData);
      postData(inputData);
    }
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
                  type="text"
                  name="first_number"
                  onChange={handleChange}
                />
              </div>

              <div className="second">
                <label id="second-label">Second Number:</label>
                <input
                  type="text"
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
