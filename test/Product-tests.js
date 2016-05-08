/// <reference path="../typings/main.d.ts" />
"use strict";
var Chai = require("chai");
var ES = require("elasticsearch");
var Domain = require('../src/Domain');
var Config = require("../config.json").test;
var INDEX = "test_index";
var should = Chai.should();
var client;
describe("simple product", function () {
    before(function (done) {
        var create = function (done) {
            client.indices.create({ index: INDEX, body: Config.indices.product }, function (err, res) {
                if (err)
                    return done(err);
                done();
            });
        };
        // // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
        client = new ES.Client({
            host: Config.es_host,
            // log: 'trace'
            // log: 'info'
            log: 'error'
        });
        client.indices.exists({ index: INDEX }, function (err, res) {
            if (err)
                return done(err);
            if (res) {
                client.indices.delete({ index: INDEX }, function (err, res) {
                    if (err)
                        return done(err);
                    return create(done);
                });
            }
            else {
                return create(done);
            }
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
