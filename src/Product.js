"use strict";
var Product = (function () {
    function Product() {
        this.Country = "DK";
    }
    Product.prototype.Output = function () {
        console.log(this.ItemNumber);
    };
    return Product;
}());
exports.Product = Product;
