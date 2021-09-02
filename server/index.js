const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

dotenv.config();
app.use(express.json());

console.log(("Inside Index"));
mongoose.connect('mongodb://localhost:27017/blogLocal',
 {useNewUrlParser: true}).then(() => console.log('DB Connection Successfull'));

// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('DB Connection Successfull'))
//     .catch((err) =>console.error(err));

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/post', postRoute);

app.listen('3001', () => {
});

// password: userBlog