import * as ES from "elasticsearch";
import * as Async from "async";
const Config = require("../../config.json").test;


// https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/api-reference-2-2.html
export default class ElasticSearchHelper {
  private client;


  constructor() {
    this.client = new ES.Client({
      host: Config.es_host,
      // log: 'trace'
      // log: 'info'
      log: 'error'
    });
  }  

  init(done: any) {
    Async.waterfall([ Async.apply(this.exists, this.client), this.delete_, this.create], (err, res) => {
      if (err) throw err;
      done();
    });
  }


  private exists(client, done) {
    client.indices.exists({ index: Config.index }, (err, res) => {
      if (err) return done(err);
      done(null, res, client);
    });
  };

  private delete_ (exists, client, done) {
    // console.log('running delete');
    if (!exists) return done(null, client);
    client.indices.delete({ index: Config.index }, (err, res) => {
      if (err) return done(err);
        done(null, client);
      });
  }

  private create (client, done) {
    // console.log('running create');
    client.indices.create({ index: Config.index, body: Config.indices.product }, (err, res) => {
      if (err) return done(err);
      done();
    });
  }

  save (id: number, document: any, done) {
    this.client.index({
      index: Config.index,
      type: 'product',
      id: id,
      body: document
    },
      function(err, res) {
        if (err) return done(err);
        done(res);
      });
  }

  refresh(done: any) {
    this.client.indices.refresh({ index: Config.index }, function(err, res) {
      if (err) return done(err);
      done();
    });
  }

  search (body: any, done: any) {
    this.client.search({ index: Config.Index, body: body }, function(err, res) {
      if (err) return done(err);
      done(res);
    });

  }
}
