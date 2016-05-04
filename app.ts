
// import * as http from "http";
// import * as net from "net";
// import * as fs from "fs";

// import * as Express from "express";

import * as ES from "elasticsearch";

import { Product } from "./Product";
import { inspect } from "util";
const ES_HOST: string = '192.168.99.100:9200';

let p = new Product();
p.ItemNumber = '123';
p.Output();




// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
var client = new ES.Client({
  host: ES_HOST,
  // log: 'trace'
  log: 'info'
});

// client.index({
// 	index: 'myindex',
// 	type: 'mytype',
// 	id: '1',
// 	body: p
// }, function(error, response) {
// 	console.log(arguments);
// });

// client.get({
// 	index: 'myindex',
// 	type: 'mytype',
// 	id: 1
// }, function(error, response) {
// 	// console.log(arguments);
//  	console.log(inspect(response));
// });

client.search({
  index: 'myindex',
  type: 'mytype',
  body: {}
}, function(error, response) {
  // console.log(arguments);
   console.log(inspect(response.hits));
});



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