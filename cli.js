#!/usr/bin/env node

'use strict';

const md5 = require('md5');
const cp = require('clipboardy');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

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
	const data = md5(base);
	cp.writeSync(data);
	console.log(`\n› ${data} \n\n› hash copied!\n`);
}

if (arg === '-c' || arg === '--convert') {
	if (!inp) {
		console.log('\n› Please provide an input \n');
		process.exit(1);
	}

	const data = md5(inp);
	cp.writeSync(data);
	console.log(`\n› ${data} \n\n› hash copied!\n`);
}
