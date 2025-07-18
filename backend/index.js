require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const port = process.env.PORT || 3001;

app.get('/api', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/data', require('./routes/data'));

// Only listen on a port when running locally
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
  });
}

module.exports = app;
