/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../es-proto.d.ts" />

import * as Chai from "chai"
import * as ES from "elasticsearch";
import * as Domain from '../../src/Domain'
import { Search, SearchQuery } from '../../src/Search'
import _Config from '../../src/Config'
import esHelper from './_ElasticSearch-helper'
import * as moment from "moment"

const should = Chai.should();
const _ES = new esHelper();
const _config = _Config('test');



describe("simple product", function() {

  before(function(done) {
    _ES.init(function() {
      var product = new Domain.Product();
      product.itemNumber = "123";
      product.header = "header123";
      _ES.save(1, product, function() {
        _ES.refresh(done);
      });
    });

  });


  /*
  * Simple properties on product
  */
  describe("simple properties", function() { 

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

});




describe("simple product", function() {

  before(function(done) {
    _ES.init(function() {
      var product = new Domain.Product();
      product.itemNumber = "123";
      product.header = "header123";

      var itemAllow = new Domain.ItemAllow();
      itemAllow.startDate = moment('2016-02-01T00:00:00.000Z');
      itemAllow.AddAirport("CPH", "LPA");
      product.itemAllow = [itemAllow];

      _ES.save(1, product, function() {
        _ES.refresh(done);
      });
    });

  });


  describe("item allow rule", function() {

    it('todo', function(done) {
      var q = new SearchQuery();
      q.market = "TCAS";
      q.assortmentDates = [moment('2016-01-01T00:00:00.000Z')]

      var s = new Search(_config.es_host);
      s.search(q, function(err, res) {
        if (err) return done(err);
        done();
      });
    });

  });

});


