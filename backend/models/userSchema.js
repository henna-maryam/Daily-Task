const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, required:true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    place: {type: String, required: true},
    education: {type: String, required: true},
    skill: {type:String, required: true}
});

module.exports = mongoose.model('User', userSchema);