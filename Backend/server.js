// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config(); 

const Server = express();
connectDB(); 

const PORT = process.env.PORT || 5000;
Server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
