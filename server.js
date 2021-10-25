const express = require('express');
const path = require('path');

const router = require('./routes/index');

const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//homepage routes
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, './public/index.html'))
);

//notes route
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

// /api
app.use('/api', require('./routes/index'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 😈`)
);