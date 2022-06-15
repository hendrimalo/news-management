require('dotenv').config();

const { MONGO_DB_DEV, REDIS_PORT } = process.env;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

// import and connect database mongoose
mongoose.connect(MONGO_DB_DEV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newsRouter = require('./routes/news');
const tagsRouter = require('./routes/tags');
const topicsRouter = require('./routes/topics');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const URL = '/api/v1';
// crud
app.use(`${URL}/news`, newsRouter);
app.use(`${URL}/tags`, tagsRouter);
app.use(`${URL}/topics`, topicsRouter);
// filter

module.exports = app;
