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
   },
   parm_path: {
      local: './build/'
   }
};

var mis = util(options);

mis.parm.fromflatfile('./parm/DXCBAT.parm')
.then(mis.parm.tofile.bind(mis, './build/DXCBAT.parm'))
.then(mis.deploy.parm)
.then(mis.script.runonce.bind(mis, './usc/dx-batch.usc'));

mis.script.install('./usc/care-submit.usc');
//mis.script.runonce('./usc/dx-batch.usc');
