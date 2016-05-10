export default function(env) : IConfig {
  if (env === 'test') {
    return require("../config.json").test;
  }
  throw "Found no config file for " + env;
}

interface IConfig {
  es_host: string;
  index: string;
  indices: any;
}



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
