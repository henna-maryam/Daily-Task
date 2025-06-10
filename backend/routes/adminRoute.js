const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/userSchema');
const dotenv = require('dotenv');
dotenv.config();

router.post('/login', async (req,res) => {
    const {username, password} = (req.body);
    try {
        if(username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(
                {username: process.env.ADMIN_USERNAME},
                process.env.JWT_SECRET,
                {expiresIn: '1h'}
            );
        }
        return res.status(200).json({token})
    } catch (error) {
        return res.status(500).json({message: 'Invalid credentials', error: error.message})
    }
});


router.get('/users', async (req,res) => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        return req.status(500).json({message: 'Something Wrong', error: error.message});
    }
});


router.get('/user/:id', async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong', error: error.message});
    }
});


module.exports = router;