const
	fs = require('fs'),
	c_process = require('child_process'),
	pty = require('pty.js');


module.exports = {
	topdf: function(location, output, options, cb) {
		var cmd = 'wkhtmltopdf ';
		output = output || 'output.pdf'
		if (!(options == null && !(options instanceof Array))) {
			var keys = Object.keys(options)
			for (var i = keys.length - 1; i >= 0; i--) {
				cmd += ' --' +keys[i] + ' ' + options[keys[i]]+' ';
			};

		}
		c_process.exec(cmd + location + ' ' + output, function(error, stdout, stderr) {
			var std = {
					stdout: stdout,
					stderr: stderr,
					output: output
				}
			if (error) {
				var err = {
					error: {
						stack: error.stack,
						code: error.code,
						signal: error.signal,
						killed: error.killed,
						stderr: stderr
					}
				};
				cb(err, std);
				return err;
			} else {
				cb(null, std);
				return true;
			}
		});

	}
}