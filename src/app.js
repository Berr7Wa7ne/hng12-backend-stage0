const express = require('express');
const cors = require('cors');
const app = express();
const businessWatchlistRoutes = require('./routes/EmployerRoutes/BusinessWatchlistRoutes');


app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.options('*', cors());

app.use(express.json());
app.use ('/watchlist', businessWatchlistRoutes);



module.exports = app;