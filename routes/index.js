const router = require('express').Router();

const notes = require('./noteRouter');

router.use('/notes', notes);

module.exports = router;