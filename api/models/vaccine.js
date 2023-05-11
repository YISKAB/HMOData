const mongoose = require("mongoose");

const VaccineSchema = new mongoose.Schema({
    date: Date,
    maker: String,
})
const Vaccine = mongoose.model("Vaccine", VaccineSchema);
module.exports = Vaccine;