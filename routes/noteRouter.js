const express = require('express');
const { readFromFile, uuid, notesData, readAndAppend} = require('../helpers/read');
const router = express.Router();

// route for getting notes
router.get('/', (req, res) => {
    // log to indicate whether get request was recieved
    console,log(`${req.method} request recieved.`);
    // read the db.json then parse content 
    readFromFile('./db/db/json').then((data) => res.json(JSON.parse(data)))
});

// post new notes
router.post('/', (req, res) => {
    // log to check if post was recieved
    console.log(`${req.method} request recieved.`);
    // destructure for items in request body
    const { title, text } = req.body;
    console.log('Object Created');
    // Check for all properties
    if (title && text) {
        // create note object
        const newNotes = {
            title,
            text,
            id: uuid(),
        };
        // save notes to the database
        readAndAppend(newNotes, './db/db.json');

        const response = {
            status: 'success',
            body: newNotes,
        };

        res.json(response);
    } else {
        res.json('Error in posting feedback');
    }
});

// export the router
module.exports = router;