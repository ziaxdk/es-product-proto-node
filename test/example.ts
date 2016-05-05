/// <reference path="../typings/main.d.ts" />

import * as Chai from "chai"
const should = Chai.should();

describe("test", function() {
  it("bla", () => {

	  var foo = 'bar';
	var beverages = { tea: ['chai', 'matcha', 'oolong'] };

	foo.should.be.a('string');
	foo.should.equal('bar');
	foo.should.have.length(3);
	beverages.should.have.property('tea').with.length(3);


	  
  });

});

