const express = require("express");
const { formData } = require("../Controllers/Form.controller");
const formRouter = express.Router();

formRouter.post("/form-data", formData);

module.exports = {
  formRouter,
};
