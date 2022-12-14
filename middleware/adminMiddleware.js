const jwt = require('jsonwebtoken');
const user = require('../models/user');

const requireAdminAuth = (req, res, next) => {
  const token = req.cookies.jwt;
    if (!token.isAdmin) {
            return res.status(403).send('you do not have authorization to access thid page...')
    }
    next();
}

module.exports = { requireAdminAuth };