const mongoose = require('mongoose');

const appointSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    problem: String,
    message: String
});

module.exports = mongoose.model("appointments", appointSchema);