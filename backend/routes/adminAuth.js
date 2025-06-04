const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Admin = require('../models/adminSchema');
require(dotenv).config;

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




module.exports = router;