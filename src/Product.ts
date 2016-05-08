export class Product {
  itemNumber: string;
  country: Countries;
  header: string;
  itemAllows: ItemAllow[];

  constructor() {
    this.country = "DK";
  }

  Output() {
    console.log(this.itemNumber);
  }
}

export type Countries = "DK" | "SE";
export type Markets = "TCAS" | "CONDOR" | "TCUK";


export class ItemAllow {
  startDate: Date;
}