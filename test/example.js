/// <reference path="../typings/main.d.ts" />
"use strict";
var Chai = require("chai");
var ES = require("elasticsearch");
var Product_1 = require("../src/Product");
var Config = require("../config.json").test;
var INDEX = "test_index";
var should = Chai.should();
var client;
var product = new Product_1.Product();
product.ItemNumber = "123";
describe("simple product", function () {
    before(function () {
        // // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
        client = new ES.Client({
            host: Config.es_host,
            // log: 'trace'
            log: 'info'
        });
    });
    after(function () {
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
    it("should insert a product", function (done) {
        client.index({
            index: INDEX,
            type: 'Product',
            id: '1',
            body: product
        }, function (err, res) {
            console.log(res.created);
            res.should.be.a.json;
            res.created.should.be.true;
            done();
        });
    });
});