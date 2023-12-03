const express = require('express');

const router = express.Router();

const { send } = require('../controllers/mail.controller');

router.get('/send2', (req, res) => res.send({ status: 'server running' }));
router.post('/send', send);
module.exports = router;
