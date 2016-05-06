import * as Domain from './Market'

export class Product {
  itemNumber: string;
  country: Countries;
  markets: Domain.Market[];

  constructor() {
    this.country = "DK";
  }

  Output() {
    console.log(this.itemNumber);
  }
}

export type Countries = "DK" | "SE";
