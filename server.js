// ========= IMPORT DEPENDENCIES =========
const express = require('express');
const cors = require('cors');

// ========= IMPORT JSON FILES =========
const projects = require('./projects.json');
const about = require('./about.json');

// ========= CREATE APP OBJECT =========
const app = express();

// ========= MIDDLEWARE =========
app.use(cors());

// ========= ROUTES =========
//HOME ROUTE

app.get('/', (req, res) => {
    res.send('hello world');
});

// ROUTE FOR RETRIEVING PROJECTS
app.get('/projects', (req, res) =>{
    // send projects via JSON
    res.json(projects);
})

// ROUTE FOR RETRIEVING ABOUT INFO
app.get('/about', (req, res) =>{
    // send about via JSON
    res.json(about);
})

// DECLARE VARIABLE FOR PORT
const PORT = process.env.PORT || 4000;

// TURN ON SERVER LISTENER
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));