const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('You are on Groceries');
});

module.exports = router;