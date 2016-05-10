"use strict";
var Product = (function () {
    function Product() {
        this.country = "DK";
        this.itemAllow = [];
    }
    Product.prototype.Output = function () {
        console.log(this.itemNumber);
    };
    return Product;
}());
exports.Product = Product;
var ItemAllow = (function () {
    function ItemAllow() {
        this.allow = [];
        this.disallow = [];
    }
    ItemAllow.prototype.AddAirportAll = function (target, reverse, allowable) {
        if (allowable === void 0) { allowable = Allowable.Allow; }
        var element = reverse ? "*-" + target : target + "-*";
        if (allowable == Allowable.Allow) {
            this.allow = this.allow.concat(element);
        }
        else {
            this.disallow = this.disallow.concat(element);
        }
    };
    ItemAllow.prototype.AddAirport = function (from, to, allowable) {
        if (allowable === void 0) { allowable = Allowable.Allow; }
        var element = from + "-" + to;
        if (allowable == Allowable.Allow) {
            this.allow = this.allow.concat(element);
        }
        else {
            this.disallow = this.disallow.concat(element);
        }
    };
    ItemAllow.prototype.AddAirportBothDirections = function (from, to, allowable) {
        if (allowable === void 0) { allowable = Allowable.Allow; }
        var elementZig = from + "-" + to;
        var elementZag = to + "-" + from;
        if (allowable == Allowable.Allow) {
            this.allow = this.allow.concat([elementZig, elementZag]);
        }
        else {
            this.disallow = this.disallow.concat([elementZig, elementZag]);
        }
    };
    return ItemAllow;
}());
exports.ItemAllow = ItemAllow;
(function (Allowable) {
    Allowable[Allowable["Allow"] = 10] = "Allow";
    Allowable[Allowable["Disallow"] = 20] = "Disallow";
})(exports.Allowable || (exports.Allowable = {}));
var Allowable = exports.Allowable;
