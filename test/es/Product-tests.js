/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />
"use strict";
var Chai = require("chai");
var Domain = require('../../src/Domain');
var _ElasticSearch_helper_1 = require('./_ElasticSearch-helper');
var Config = require("../../config.json").test;
var INDEX = "test_index";
var should = Chai.should();
var _ES = new _ElasticSearch_helper_1.default();
describe("simple product", function () {
    before(function (done) {
        _ES.init(done);
    });
    it("should insert a product with itemNumber & country", function (done) {
        var product = new Domain.Product();
        product.itemNumber = "123";
        product.header = "header123";
        _ES.save(1, product, function (res) {
            res.should.be.a.json;
            res.created.should.be.true;
            done();
        });
    });
    it("should insert a product with itemAllow", function (done) {
        var product = new Domain.Product();
        product.itemNumber = "123";
        product.header = "header123";
        var itemAllow = new Domain.ItemAllow();
        itemAllow.startDate = new Date();
        product.itemAllows = [itemAllow];
        _ES.save(2, product, function (res) {
            res.should.be.a.json;
            res.created.should.be.true;
            done();
        });
    });
});
