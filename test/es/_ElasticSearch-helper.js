"use strict";
var ES = require("elasticsearch");
var Async = require("async");
var Config = require("../../config.json").test;
// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
var ElasticSearchHelper = (function () {
    function ElasticSearchHelper() {
        this.client = new ES.Client({
            host: Config.es_host,
            // log: 'trace'
            // log: 'info'
            log: 'error'
        });
    }
    ElasticSearchHelper.prototype.init = function (done) {
        Async.waterfall([Async.apply(this.exists, this.client), this.delete_, this.create], function (err, res) {
            if (err)
                throw err;
            done();
        });
    };
    ElasticSearchHelper.prototype.exists = function (client, done) {
        client.indices.exists({ index: Config.index }, function (err, res) {
            if (err)
                return done(err);
            done(null, res, client);
        });
    };
    ;
    ElasticSearchHelper.prototype.delete_ = function (exists, client, done) {
        // console.log('running delete');
        if (!exists)
            return done(null, client);
        client.indices.delete({ index: Config.index }, function (err, res) {
            if (err)
                return done(err);
            done(null, client);
        });
    };
    ElasticSearchHelper.prototype.create = function (client, done) {
        // console.log('running create');
        client.indices.create({ index: Config.index, body: Config.indices.product }, function (err, res) {
            if (err)
                return done(err);
            done();
        });
    };
    ElasticSearchHelper.prototype.save = function (id, document, done) {
        this.client.index({
            index: Config.index,
            type: 'product',
            id: id,
            body: document
        }, function (err, res) {
            if (err)
                return done(err);
            done(res);
        });
    };
    ElasticSearchHelper.prototype.refresh = function (done) {
        this.client.indices.refresh({ index: Config.index }, function (err, res) {
            if (err)
                return done(err);
            done();
        });
    };
    ElasticSearchHelper.prototype.search = function (body, done) {
        this.client.search({ index: Config.Index, body: body }, function (err, res) {
            if (err)
                return done(err);
            done(res);
        });
    };
    return ElasticSearchHelper;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ElasticSearchHelper;
