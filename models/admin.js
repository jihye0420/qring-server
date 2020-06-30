const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: String,
    salt: String,
    auth: Boolean,
    name: {
        type: String,
        required: true,
    },
    phone: String,
    birth: {
        type: Date,
        required: true,
    }
});

module.exports = mongoose.model("admin", AdminSchema);