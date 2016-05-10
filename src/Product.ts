import * as moment from 'moment'

export class Product {
  itemNumber: string;
  country: Countries;
  header: string;
  itemAllow: ItemAllow[];

  constructor() {
    this.country = "DK";
    this.itemAllow = [];
  }

  Output() {
    console.log(this.itemNumber);
  }
}

export type Countries = "DK" | "SE";
export type Markets = "TCAS" | "CONDOR" | "TCUK";


export class ItemAllow {
  startDate: moment.Moment;
  allow: string[];
  disallow: string[];

  constructor() {
    this.allow = [];
    this.disallow = [];
  }


  AddAirportAll(target: string, reverse: boolean, allowable: Allowable = Allowable.Allow) {
    var element = reverse ? `*-${target}` : `${target}-*`;
    
    if (allowable == Allowable.Allow) {
      this.allow = this.allow.concat(element);
    }
    else {
      this.disallow = this.disallow.concat(element);
    }
  }

  AddAirport(from: string, to: string, allowable: Allowable = Allowable.Allow) {
    var element = `${from}-${to}`;
    if (allowable == Allowable.Allow) {
      this.allow = this.allow.concat(element);
    }
    else {
      this.disallow = this.disallow.concat(element);
    }
  }

  AddAirportBothDirections(from: string, to: string, allowable: Allowable = Allowable.Allow) {
    var elementZig = `${from}-${to}`;
    var elementZag = `${to}-${from}`;
    if (allowable == Allowable.Allow) {
      this.allow = this.allow.concat([ elementZig, elementZag ]);
    }
    else {
      this.disallow = this.disallow.concat([elementZig, elementZag]);
    }
  }

  // public get Allow(): string[] {
  //   return this.allow;
  // }
}

export enum Allowable {
  Allow = 10,
  Disallow = 20
}