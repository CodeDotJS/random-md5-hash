import childProcess from 'child_process';
import test from 'ava';

test.cb('random', t => {
	const cp = childProcess.spawn('./cli.js', ['-r'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 1);
		t.end();
	});
});

test.cb('create', t => {
	const cp = childProcess.spawn('./cli.js', ['-c', 'jondoe'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 1);
		t.end();
	});
});
