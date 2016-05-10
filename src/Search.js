"use strict";
var moment = require('moment');
var ES = require("elasticsearch");
var Search = (function () {
    function Search(esHost) {
        this.client = new ES.Client({
            host: esHost,
            // log: 'trace'
            // log: 'info'
            log: 'error'
        });
    }
    Search.prototype.search = function (query, done) {
        console.log('search', query.market, query.assortmentDates[0].toDate());
        var body = {
            "query": {
                "filtered": {
                    "query": {
                        "match_all": {}
                    },
                    "filter": {
                        "bool": {}
                    }
                }
            }
        };
        this.client.search({ index: 'test_index', body: body }, done);
        // done(null, 'ok');
    };
    return Search;
}());
exports.Search = Search;
var SearchQuery = (function () {
    function SearchQuery() {
        this.assortmentDates = [moment()];
    }
    return SearchQuery;
}());
exports.SearchQuery = SearchQuery;
