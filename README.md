#urltopdf
==

Converts webpages to pdf

Usage:

```JavaScript
var urltopdf = require('urltopdf');
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
```


#Installation:

```
npm install urltopdf
```

#Test:

mocha

#API
err is an object with follwing attributes 

stack: Node.js stack which also has the error

code: error code

signal: error signal

killed: process killed boolean value 

stderr: Actual error returned

#Author:

Bhanu Pratap Chaudhary

#Version History

0.0.1 - First release , minimal tests