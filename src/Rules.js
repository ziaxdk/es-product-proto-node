var Route = (function () {
    function Route() {
    }
    Route.prototype.value = function () {
        return this.From + '-' + this.To;
    };
    return Route;
}());
var Processor = (function () {
    function Processor() {
        this.allowable = new Allowable();
    }
    Processor.prototype.And = function (left, right) {
    };
    Processor.prototype.Process = function () {
        return this.allowable;
    };
    return Processor;
}());
var Allowable = (function () {
    function Allowable() {
    }
    Allowable.prototype.Allow = function () {
    };
    return Allowable;
}());
var p = new Processor();
console.log(p);
