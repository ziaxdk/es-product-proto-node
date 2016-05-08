"use strict";
var Domain = require('../src/Domain');
var Chai = require("chai");
var should = Chai.should();
describe('Item allow', function () {
    describe('with airport', function () {
        it("should render correctly on allow", function () {
            var ia = new Domain.ItemAllow();
            ia.AddAirport("CPH", "LPA");
            ia.allow.should.include('CPH-LPA');
        });
    });
});
