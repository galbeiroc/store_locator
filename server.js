const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

//load env variables
dotenv.config({ path: './config/config.env' });

//Connect DB
connectDB();

const app = express();

//body parser
app.use(express.json());

//Enable Cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server run ${process.env.NODE_ENV} mode on port ${PORT}`)
);
