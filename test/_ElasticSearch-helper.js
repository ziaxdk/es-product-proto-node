"use strict";
var ES = require("elasticsearch");
var Async = require("async");
var Config = require("../config.json").test;
function _ElasticSearchHelper(done) {
    var client = new ES.Client({
        host: Config.es_host,
        // log: 'trace'
        // log: 'info'
        log: 'error'
    });
    var exists = function (done) {
        client.indices.exists({ index: Config.index }, function (err, res) {
            if (err)
                return done(err);
            done(null, res);
        });
    };
    var delete_ = function (exists, done) {
        if (!exists)
            return done(null);
        client.indices.delete({ index: Config.index }, function (err, res) {
            if (err)
                return done(err);
            done(null);
        });
    };
    var create = function (done) {
        client.indices.create({ index: Config.index, body: Config.indices.product }, function (err, res) {
            if (err)
                return done(err);
            done(null);
        });
    };
    Async.waterfall([exists, delete_, create], function (err, res) {
        done(null, client);
    });
    // // // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
    // client = new ES.Client({
    //   host: Config.es_host,
    //   // log: 'trace'
    //   // log: 'info'
    //   log: 'error'
    // });
    // client.indices.exists({ index: INDEX }, function(err, res) {
    //   if (err) return done(err);
    //   if (res) {
    //     client.indices.delete({ index: INDEX }, function(err, res) {
    //       if (err) return done(err);
    //       return create(done);
    //     });
    //   } else {
    //     return create(done);
    //   }
    // });
}
exports.__esModule = true;
exports["default"] = _ElasticSearchHelper;
