"use strict";
var Search = (function () {
    function Search() {
    }
    Search.prototype.search = function (query) {
        console.log('search', query.market, query.assortmentDates && query.assortmentDates.length);
    };
    return Search;
}());
exports.Search = Search;
var SearchQuery = (function () {
    function SearchQuery() {
    }
    return SearchQuery;
}());
exports.SearchQuery = SearchQuery;
