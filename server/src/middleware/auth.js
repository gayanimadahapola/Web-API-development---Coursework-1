const { User } = require('../models/User');
const { verify } = require('jsonwebtoken');



let auth = (req, res, next) => {
  let authHeaders = req.headers.authorization;

  if (authHeaders) {
    const token = authHeaders.split(' ')[1];

    verify(token, '12345678', (erorr, user) => {
      if (error) {
        return res.json({
          loginSuccess: false,
          message: error.message
      })
      }

      req.user = user;
      next();;
    })
  } else {
    return res.json({
      loginSuccess: false,
      message: 'Unauthorized'
  })
  }
};