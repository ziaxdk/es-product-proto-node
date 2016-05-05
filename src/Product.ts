
export class Product {
	ItemNumber:string;
	Country: Countries;

	constructor() {
		this.Country = "DK";
	}

	Output() {
		console.log(this.ItemNumber);
	}
}

export type Countries = "DK" | "SE";
