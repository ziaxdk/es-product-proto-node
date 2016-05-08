"use strict";
var Product = (function () {
    function Product() {
        this.country = "DK";
    }
    Product.prototype.Output = function () {
        console.log(this.itemNumber);
    };
    return Product;
}());
exports.Product = Product;
var ItemAllow = (function () {
    function ItemAllow() {
        this.Allow = [];
        this.Disallow = [];
    }
    ItemAllow.prototype.AddAirport = function (from, to, allowable) {
        if (allowable === void 0) { allowable = Allowable.Allow; }
        var element = from + "-" + to;
        if (allowable == Allowable.Allow) {
            this.Allow = this.Allow.concat(element);
        }
        else {
            this.Disallow = this.Disallow.concat(element);
        }
    };
    Object.defineProperty(ItemAllow.prototype, "allow", {
        get: function () {
            return this.Allow;
        },
        enumerable: true,
        configurable: true
    });
    return ItemAllow;
}());
exports.ItemAllow = ItemAllow;
(function (Allowable) {
    Allowable[Allowable["Allow"] = 10] = "Allow";
    Allowable[Allowable["Disallow"] = 20] = "Disallow";
})(exports.Allowable || (exports.Allowable = {}));
var Allowable = exports.Allowable;
