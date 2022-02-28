const router = require('express').Router();

const apiRoute = require('./api/');
const homeRoute = require('./home-routes.js');
const dashRoute = require('./dashboard-routes.js');

router.use('/', homeRoute);
router.use('/dashboard', dashRoute);
router.use('/api', apiRoute);

module.exports = router;