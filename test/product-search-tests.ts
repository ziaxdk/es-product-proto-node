/// <reference path="../typings/main.d.ts" />

import * as Chai from "chai"
import * as ES from "elasticsearch";
import * as Domain from '../src/Domain'

const Config = require("../config.json").test;
const INDEX = "test_index";
const should = Chai.should();
var client;

describe("product search", function() {

	before(function(done) {
		// // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
		client = new ES.Client({
			host: Config.es_host,
			// log: 'trace'
			// log: 'info'
			log: 'error'
		});
		client.indices.create({ index: INDEX, body: Config.indices.product }, function(err, res) {
      if (err) return done(err);

      var product = new Domain.Product();
      product.itemNumber = "123";
      product.header = "header123";

      client.index({
        index: INDEX,
        type: 'product',
        id: '1',
        body: product
      },
        function(err, res) {
          if (err) return done(err);
          res.should.be.a.json;
          res.created.should.be.true;

          client.indices.refresh({ index: INDEX}, function(err, res) {
            done();
          });
        });


		});
	});

	after(function(done) {
		client.indices.delete({ index: INDEX}, function(err, res) {
      if (err) return done(err);
      client.close();
			done();
		});
	});

  it('itemNumber', function(done) {
    client.search({
      index: INDEX,
      body: {
        query: {
          match: {
            itemNumber: '123'
          }
        }
      }
    }, function(err, res) {
      if (err) return done(err);
      res.hits.total.should.equal(1);
      done();
    });
  });

  it('country', function(done) {
    client.search({
      index: INDEX,
      body: {
        query: {
          match: {
            country: 'DK'
          }
        }
      }
    }, function(err, res) {
      if (err) return done(err);
      res.hits.total.should.equal(1);
      done();
    });
  });
});

