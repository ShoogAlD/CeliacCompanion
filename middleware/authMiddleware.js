const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token, 'a very hidden secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
   } else {
    res.redirect('/login');
   }
  };

  // check current user
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, 'a very hidden secret', async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          let user = await User.findById(decodedToken.id);
          res.locals.user = user;
          next();
        }
      });
    } else {
      res.locals.user = null;
      next();
    }
  };

  const requireAdminAuth = (req, res, next) => {
    const token = req.cookies.jwt;
      if (!token.isAdmin) {
              return res.status(403).send('you do not have authorization to access thid page...')
      }
      next();
  }

module.exports = { requireAuth , checkUser , requireAdminAuth };