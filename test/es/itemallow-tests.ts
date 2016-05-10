/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />

import * as Chai from "chai"
import * as moment from 'moment'
import * as ES from "elasticsearch";
import * as Domain from '../../src/Domain'
import esHelper from './_ElasticSearch-helper'

const Config = require("../../config.json").test;
const should = Chai.should();
const _ES = new esHelper();

describe("simple product", function() {

  before(function(done) {
    _ES.init(done);
  })

  it("must be searchable when no rules are applied", function(done) {

    var product = new Domain.Product();
    product.itemNumber = "123";
    product.header = "header123";

    var itemAllow = new Domain.ItemAllow();
    itemAllow.startDate = moment();
    product.itemAllow = [ itemAllow ];


    _ES.save(2, product, function(res) {
      res.should.be.a.json;
      res.created.should.be.true;
      done();
    });


  });



});

