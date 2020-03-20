const moment = require('moment-timezone');

const now = moment().tz('Asia/Seoul').format('YYYYMMDDHHmmssSSS');

console.log(now);