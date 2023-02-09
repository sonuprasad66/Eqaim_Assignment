const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  first_number: { type: Number, require: true },
  second_number: { type: Number, require: true },
});

const formModel = new mongoose.model("form", formSchema);

module.exports = {
  formModel,
};
