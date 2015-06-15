var urltopdf = require('../');

urltopdf.topdf('https://regrob.com/', 'null.pdf', {'page-size': 'A3'}, function(err,std){ 
	if(err){
		console.log(err);
		//handle error
	} else {
		console.log(1)
		console.log(std, std.output);
		//handle the printed pdf
	}

});
