const router = (require('express')).Router();

router.get('', (req, res) => res.send({ status: 'server running' }));
router.use('/api/mail', require('./mail.routes'));

module.exports = router;
