const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const catRoute = require('./routes/categories');
const multer = require('multer')

dotenv.config();
app.use(express.json());

console.log(("Inside Index"));
mongoose.connect('mongodb://localhost:27017/blogLocal',
    { useNewUrlParser: true })
    .then(() => console.log('DB Connection Successfull'));

// mongoose.connect(process.env.MONGO_URL)
//     .then(() => console.log('DB Connection Successfull'))
//     .catch((err) =>console.error(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json('file has been uploaded');
});

app.use('/server/auth', authRoute);
app.use('/server/users', userRoute);
app.use('/server/post', postRoute);
app.use('/server/topics', catRoute);

app.listen('3001', () => {
});

// password: userBlog