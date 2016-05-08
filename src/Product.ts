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
  private Allow: string[];
  private Disallow: string[];

  constructor() {
    this.Allow = [];
    this.Disallow = [];
  }


  AddAirportAll(target: string, reverse: boolean, allowable: Allowable = Allowable.Allow) {
    var element = reverse ? `*-${target}` : `${target}-*`;
    if (allowable == Allowable.Allow) {
      this.Allow = this.Allow.concat(element);
    }
    else {
      this.Disallow = this.Disallow.concat(element);
    }
  }

  AddAirport(from: string, to: string, allowable: Allowable = Allowable.Allow) {
    var element = `${from}-${to}`;
    if (allowable == Allowable.Allow) {
      this.Allow = this.Allow.concat(element);
    }
    else {
      this.Disallow = this.Disallow.concat(element);
    }
  }

  AddAirportBothDirections(from: string, to: string, allowable: Allowable = Allowable.Allow) {
    var elementZig = `${from}-${to}`;
    var elementZag = `${to}-${from}`;
    if (allowable == Allowable.Allow) {
      this.Allow = this.Allow.concat([ elementZig, elementZag ]);
    }
    else {
      this.Disallow = this.Disallow.concat([elementZig, elementZag]);
    }
  }

  public get allow(): string[] {
    return this.Allow;
  }
}

export enum Allowable {
  Allow = 10,
  Disallow = 20
}