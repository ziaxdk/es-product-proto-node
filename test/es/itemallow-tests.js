/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />
"use strict";
var Chai = require("chai");
var moment = require('moment');
var Domain = require('../../src/Domain');
var _ElasticSearch_helper_1 = require('./_ElasticSearch-helper');
var Config = require("../../config.json").test;
var should = Chai.should();
var _ES = new _ElasticSearch_helper_1.default();
describe("simple product", function () {
    before(function (done) {
        _ES.init(done);
    });
    it("must be searchable when no rules are applied", function (done) {
        var product = new Domain.Product();
        product.itemNumber = "123";
        product.header = "header123";
        var itemAllow = new Domain.ItemAllow();
        itemAllow.startDate = moment();
        product.itemAllow = [itemAllow];
        _ES.save(2, product, function (res) {
            res.should.be.a.json;
            res.created.should.be.true;
            done();
        });
    });
});
