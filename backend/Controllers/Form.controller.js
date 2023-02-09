const { formModel } = require("../Models/Form.Models");

const formData = async (req, res) => {
  const { first_number, second_number } = req.body;
  const first = first_number.toString().trim();
  const second = second_number.toString().trim();
  let result;
  if (first.length >= second.length) {
    result = findSum(first, second);
  } else {
    result = findSum(second, first);
  }
  res.send(result);
};

module.exports = {
  formData,
};

const findSum = (first, second) => {
  let sum = "";
  let carry = 0;
  let carryString = ["_"];
  let sumString = [];
  let obj = {};
  let diff = second.length - first.length;
  for (let i = first.length - 1; i >= 0; i--) {
    let temp =
      (Number(first.charAt(i)) % 10) +
      (Number(second.charAt(i + diff)) % 10) +
      carry;
    if (temp >= 10) {
      sum = (temp % 10) + sum;
      carry = Math.floor(temp / 10);
      if (i != 0) {
        carryString.unshift(carry);
      }
      if (i != 0) {
        sumString.unshift(temp % 10);
      } else {
        sumString.unshift(temp);
      }
      obj[`step${first.length - i}`] = {
        carryString: carryString.join(""),
        sumString: sumString.join(""),
      };
    } else {
      sum = temp + sum;
      carry = 0;
      if (i != 0) {
        carryString.unshift(carry);
      }
      sumString.unshift(temp);
      obj[`step${first.length - i}`] = {
        carryString: carryString.join(""),
        sumString: sumString.join(""),
      };
    }
  }
  return obj;
};
