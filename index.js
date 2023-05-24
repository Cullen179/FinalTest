const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MongoURI = 'mongodb+srv://admin:123@cluster0.tsckwxk.mongodb.net/'
const PORT = 3000;

mongoose.connect(MongoURI)
    .then(() => console.log("Connect sucsess"))
    .catch(err => console.log(err));


app.listen(PORT, () => console.log(PORT + 'running'));