require('dotenv').config();

const program = require('commander');

require('./build-docker');

program.parse(process.argv);
