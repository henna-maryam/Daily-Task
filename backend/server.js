const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config()

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {console.log('MONGO connected');})
    .catch((err) => {console.log(err);})

app.get('/', (req,res) => {
    res.send('hello')
});

const userRoute = require('./routes/userRoute');
app.use('/', userRoute);

const adminRoute = require('./routes/adminRoute');
app.use('/', adminRoute);


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});