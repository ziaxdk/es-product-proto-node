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
