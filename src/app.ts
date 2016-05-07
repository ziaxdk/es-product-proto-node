// import * as Express from "express";

import * as ES from "elasticsearch";
// import Search from "./Search";
import * as moment from "moment"

// import { Product, Countries } from "./Domain";
import { inspect } from "util";
import * as Domain from './Domain'

// var s = new Search();
// var now = moment();

// s.search("TCAS", now);

// Search.search(moment());

const ES_HOST: string = '192.168.99.100:9200';

let p = new Domain.Product();
p.itemNumber = '123';
p.country = "DK";

console.log(inspect(p));
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