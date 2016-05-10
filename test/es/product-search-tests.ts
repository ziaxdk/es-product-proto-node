/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />

import * as Chai from "chai"
import * as ES from "elasticsearch";
import * as Async from "async";
import * as Domain from '../../src/Domain'
import esHelper from './_ElasticSearch-helper'

const Config = require("../../config.json").test;
const should = Chai.should();
const _ES = new esHelper();

describe("product search", function() {

	before(function(done) {
    // Async.series([ _ES.init ] , function(err) {
    //   if (err) return done(err);
    //   done();
    // })

    _ES.init(function() {
      var product = new Domain.Product();
      product.itemNumber = "123";
      product.header = "header123";
      _ES.save(1, product, function() {
        _ES.refresh(done);
      });
    });

	});

  it('itemNumber', function(done) {
    var q = {
      query: {
        match: {
          itemNumber: '123'
        }
      }
    };

    _ES.search(q, function(res) {
      res.hits.total.should.equal(1);
      done();
    });
  });

  it('country', function(done) {
    var q = {
      query: {
        match: {
          country: 'DK'
        }
      }
    };

    _ES.search(q, function(res) {
      res.hits.total.should.equal(1);
      done();
    });

  });
});

