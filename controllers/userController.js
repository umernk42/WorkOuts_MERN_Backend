const User = require('../models/UserModel');

//login user
const loginUser = async(req,res) => {
    res.json({mssg: 'Login User'});
};

//Sign Up user
const signupUser = async(req,res) => {
    res.json({mssg: 'Sign Up user'});
};

module.exports = {
    signupUser,loginUser
};