/// <reference path="../typings/main.d.ts" />
"use strict";
var Chai = require("chai");
var Domain = require('../src/Domain');
var _ElasticSearch_helper_1 = require('./_ElasticSearch-helper');
var Config = require("../config.json").test;
var INDEX = "test_index";
var should = Chai.should();
var client;
describe("simple product", function () {
    before(function (done) {
        _ElasticSearch_helper_1["default"](function (err, client_) {
            client = client_;
            done();
        });
    });
    it("should insert a product with itemNumber & country", function (done) {
        var product = new Domain.Product();
        product.itemNumber = "123";
        product.header = "header123";
        client.index({
            index: INDEX,
            type: 'product',
            id: '1',
            body: product
        }, function (err, res) {
            if (err)
                return done(err);
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
        client.index({
            index: INDEX,
            type: 'product',
            id: '2',
            body: product
        }, function (err, res) {
            if (err)
                return done(err);
            res.should.be.a.json;
            res.created.should.be.true;
            done();
        });
    });
});
