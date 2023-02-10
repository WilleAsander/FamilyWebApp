const express = require('express');
const router = express.Router();
const note = require('../models/Note');

router.get('/', (req, res) => {
    res.send('You are on Notes');
});

router.get('/notey', (req, res) => {
    res.send('You are on a specific notey!!!');
});

router.note('/', (req,res) => {
    console.log(req.body);
})

module.exports = router;