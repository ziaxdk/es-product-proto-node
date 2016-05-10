import * as Domain from "./Domain";
import * as moment from 'moment';
import * as ES from "elasticsearch";

export class Search {
  client: any;


  constructor(esHost: string) {
    this.client = new ES.Client({
      host: esHost,
      // log: 'trace'
      // log: 'info'
      log: 'error'
    });

  }


  search(query: SearchQuery, done: (err, res) => void): void {
    console.log('search', query.market, query.assortmentDates[0].toDate());
    var body = 
    {
      "query": {
        "filtered": {
          "query": {
            "match_all": {}
          },
          "filter": {
            "bool": {
              
            }
          }
        }
      }
    };

    this.client.search({ index: 'test_index', body: body }, done);
    // done(null, 'ok');
  }
}

export class SearchQuery {
  market: Domain.Markets;
  assortmentDates: moment.Moment[];

  constructor() {
    this.assortmentDates = [moment()]
  }
}