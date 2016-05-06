// import * as Express from "express";
"use strict";
// import { Product, Countries } from "./Domain";
var util_1 = require("util");
var Domain = require('./Domain');
// var s = new Search();
// var now = moment();
// s.search("TCAS", now);
// Search.search(moment());
var ES_HOST = '192.168.99.100:9200';
var m = new Domain.Market();
m.name = "TCAS";
var p = new Domain.Product();
p.itemNumber = '123';
p.country = "DK";
p.markets = [m];
console.log(util_1.inspect(p));
// console.log(p);
// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
// var client = new ES.Client({
//   host: ES_HOST,
//   // log: 'trace'
//   log: 'info'
// });
// client.index({
// 	index: 'myindex',
// 	type: 'mytype',
// 	id: '1',
// 	body: p
// }, function(error, response) {
// 	console.log(inspect(response));
// });
// client.get({
// 	index: 'myindex',
// 	type: 'mytype',
// 	id: 1
// }, function(error, response) {
// 	// console.log(arguments);
//  	console.log(inspect(response));
// });
// client.search({
//   index: 'myindex',
//   type: 'mytype',
//   body: {}
// }, function(error, response) {
//   // console.log(arguments);
//    console.log(inspect(response.hits));
// });
// client.ping({
//   requestTimeout: 30000,
//   // undocumented params are appended to the query string
//   hello: "elasticsearch"
// }, function (error) {
//   if (error) {
//     console.error('elasticsearch cluster is down!');
//   } else {
//     console.log('All is well');
//   }
// }); 
