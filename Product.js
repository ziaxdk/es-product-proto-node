"use strict";
var Product = (function () {
    function Product() {
    }
    Product.prototype.Output = function () {
        console.log(this.ItemNumber);
    };
    return Product;
}());
exports.Product = Product;
