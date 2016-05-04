interface Rule {
	value():string;
}

class Route implements Rule {
	From: string;
	To: string;

	value():string {
		return this.From + '-' + this.To;
	}
}

class Processor {
	private allowable: Allowable = new Allowable();
	And(left: Rule, right: Rule):void {

	}
	
	Process():Allowable {
		return this.allowable;
	}
}

class Allowable {
	Allow():void {

	}

}


let p = new Processor();
console.log(p);

