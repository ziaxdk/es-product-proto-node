import * as Domain from "./Domain";

export class Search {


  search(query: SearchQuery): void {
    console.log('search', query.market, query.assortmentDates && query.assortmentDates.length)
  }
}

export class SearchQuery {
  market: Domain.Markets;
  assortmentDates: moment.Moment[];
}