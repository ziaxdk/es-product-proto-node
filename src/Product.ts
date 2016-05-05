
export class Product {
	ItemNumber:string;
	Country: Countries;

	Output() {
		console.log(this.ItemNumber);
	}
}

export type Countries = "DK" | "SE";
