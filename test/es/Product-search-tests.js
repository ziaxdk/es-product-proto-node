/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />
"use strict";
var Chai = require("chai");
var Domain = require('../../src/Domain');
var _ElasticSearch_helper_1 = require('./_ElasticSearch-helper');
var Config = require("../../config.json").test;
var should = Chai.should();
var _ES = new _ElasticSearch_helper_1.default();
describe("product search", function () {
    before(function (done) {
        // Async.series([ _ES.init ] , function(err) {
        //   if (err) return done(err);
        //   done();
        // })
        _ES.init(function () {
            var product = new Domain.Product();
            product.itemNumber = "123";
            product.header = "header123";
            _ES.save(1, product, function () {
                _ES.refresh(done);
            });
        });
    });
    it('itemNumber', function (done) {
        var q = {
            query: {
                match: {
                    itemNumber: '123'
                }
            }
        };
        _ES.search(q, function (res) {
            res.hits.total.should.equal(1);
            done();
        });
    });
    it('country', function (done) {
        var q = {
            query: {
                match: {
                    country: 'DK'
                }
            }
        };
        _ES.search(q, function (res) {
            res.hits.total.should.equal(1);
            done();
        });
    });
});
