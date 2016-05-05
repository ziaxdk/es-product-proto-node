/// <reference path="../typings/main.d.ts" />

import * as Chai from "chai"
import * as ES from "elasticsearch";
import { Product, Countries } from "../src/Product";
const Config = require("../config.json").test;
const INDEX = "test_index";
const should = Chai.should();
var client;
var product = new Product();
product.ItemNumber = "123";

describe("simple product", function() {

	before(function() {
		// // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
		client = new ES.Client({
			host: Config.es_host,
			// log: 'trace'
			log: 'info'
		});
	});

	after(function() {
		client.close();
	});


 //  it("bla", () => {

	//   var foo = 'bar';
	// var beverages = { tea: ['chai', 'matcha', 'oolong'] };

	// foo.should.be.a('string');
	// foo.should.equal('bar');
	// foo.should.have.length(3);
	// beverages.should.have.property('tea').with.length(3);
 //  });

  it("should insert a product", function(done) {
  	client.index({
  		index: INDEX,
  		type: 'Product',
  		id: '1',
		body: product

  	}, function (err, res) {
		res.should.be.a.json;
		res.created.should.be.true;
		done();	

  	});

  });

});

