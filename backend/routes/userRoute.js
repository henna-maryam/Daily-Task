// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcrypt');

// const User = require('../models/userSchema');

// router.post('/signup', async (req,res) => {
//     const {username, email, password, place, education, skill} = req.body;
//     try {
//         const existingUser = await User.findOne({email});
//         if(existingUser){
//             return res.status(400).json({message: 'User already exists'});
//         }
//         const hashPassword = await bcrypt.hash(password,8);
//         const newUser = new User({username, email, password: hashPassword, place, education, skill});
//         await newUser.save();
//         return res.status(201).json({message: 'User created successfully'});
//     } catch (error) {
//         return res.status(500).json({message: 'Something went wrong', error: error.message});
//     }
// });





// module.exports = router;