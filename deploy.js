var util = require('mis-util');
var config = require('./config.ignore');

var options = {
   sysname: '/c1/FRSH',
   connect: {
      host: 'gccmhc',
      user: 'tim',
      password: config.user
   },
   cron: {
      user: 'datamgr',
      pass: config.cron
   },
   usc_path: {
      local: './uScript/'
   }
};

var mis = util(options);

mis.script.install('./usc/care-submit.usc');
