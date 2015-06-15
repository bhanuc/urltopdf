var should = require('should');
var nc = require('../');

 describe("error for wrong url", function(){
 it('should give a error if the location is wrong', function(done) {

var callback = function(err,std){ 
	if(err){
		err.error.should.have.properties('stack','code','signal','killed','stderr');
		should.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.not.be.exactly('');
	} else {
		should.not.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.be.exactly('');
	}

};

	nc.topdf('http://dasdasdasdcd.com/', 'null.pdf', {'page-size': 'A3'}, callback);
	done();
});
});

 describe("no error for correct url and working internet", function(){
 it('should not give a error if the location is right and internet is working', function(done) {

var callback = function(err,std){ 
	if(err){
		err.error.should.have.properties('stack','code','signal','killed','stderr');
		should.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.not.be.exactly('');
	} else {
		should.not.exist(err);
		(stdout).should.be.exactly('');
		(stderr).should.be.exactly('');
	}

};

	nc.topdf('http://google.com/', 'null.pdf', {'page-size': 'A3'}, callback);
	done();
});
});
