"use strict";
function default_1(env) {
    if (env === 'test') {
        return require("../config.json").test;
    }
    throw "Found no config file for " + env;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
// {
//   "test" : {
//     "es_host" : "http://192.168.99.100:9200",
//     "index" : "test_index",
//     "indices" : {
//       "product" : {
//         "settings" : {
//           "number_of_shards" : 1,
//           "number_of_replicas" : 0
//         },
//         "mappings" : {
//           "product" : {
//           "dynamic": "strict",
//             "properties" : {
//               "itemNumber" : { "type" : "string" },
//               "country" : { "type" : "string" },
//               "header" : { "type" : "string" },
//               "itemAllows" : {
//                 "type" : "nested",
//                 "properties" : {
//                   "startDate" : { "type" : "date" },
//                   "allow":  { "type" : "string" },
//                   "disallow":  { "type" : "string" }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }
