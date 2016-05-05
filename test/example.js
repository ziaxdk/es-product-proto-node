/// <reference path="../typings/main.d.ts" />
"use strict";
var Chai = require("chai");
var should = Chai.should();
describe("test", function () {
    it("bla", function () {
        var foo = 'bar';
        var beverages = { tea: ['chai', 'matcha', 'oolong'] };
        foo.should.be.a('string');
        foo.should.equal('bar');
        foo.should.have.length(3);
        beverages.should.have.property('tea').with.length(3);
    });
});
