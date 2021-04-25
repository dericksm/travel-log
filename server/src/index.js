require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

const logs = require('./api/logs');

const { notFound, errorHandler } = require('./middlewares');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//routes
app.use('/api/logs', logs);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});
