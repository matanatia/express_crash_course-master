const moment = require('moment');

const logger = (req, res, next) => {
  const date = new Date();
  console.log(
    `${req.method}  - ${req.protocol}://${req.get('host')}${req.originalUrl} -  ${date.toGMTString()}`
  );
  next();
};

module.exports = logger;
