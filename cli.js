#!/usr/bin/env node

'use strict';

const md5 = require('md5');

const arg = process.argv[2];
const inp = process.argv[3];

if (!arg || arg === '-h' || arg === '--help') {
	console.log(`
 Usage: rmh <command> [input]

 Command:
  -r, --random      Generate random MD5 hash
  -c, --convert     Convert strings to MD5 hash

  Help:
  -h, --help        Show help

  NOTE: no input required for flag -r
		`);
	process.exit(1);
}

const base = Math.random().toString(15).substr(10, 20);

if (arg === '-r' || arg === '--random') {
	console.log(`\n› ${md5(base)} \n`);
}

if (arg === '-c' || arg === '--convert') {
	if (!inp) {
		console.log('\n› Please provide an input \n');
		process.exit(1);
	}

	console.log(`\n› ${md5(inp)} \n`);
}
