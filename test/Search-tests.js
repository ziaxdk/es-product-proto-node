/// <reference path="../typings/main.d.ts" />
"use strict";
var Chai = require("chai");
var Search = require('../src/Search');
var Config = require("../config.json").test;
var should = Chai.should();
describe("simple product", function () {
    it("should insert a product with itemNumber & country", function (done) {
        var search = new Search.Search();
        var q = new Search.SearchQuery();
        search.search(q);
        done();
    });
});
