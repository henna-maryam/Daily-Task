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
            const token = jwt.sign( {username: process.env.ADMIN_USERNAME}, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({message: 'Login successful', token});
        } else {
            return res.status(401).json({message: 'Invalid credentials'});
        }
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong', error: error.message})
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


router.put('/user/:id', async (req,res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.status(200).json({message: 'User updated successfully', updatedUser}); 
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong', error: error.message});
    }
});


router.delete('/user/:id', async (req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            return res.status(404).json({message: 'User not found'});
        }
        return res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        return res.status(500).json({message: 'Something went wrong', error: error.message});
    }
});

module.exports = router;