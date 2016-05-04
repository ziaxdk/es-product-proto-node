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
var Product2 = (function () {
    function Product2() {
    }
    Product2.prototype.Output = function () {
        console.log(this.ItemNumber);
    };
    return Product2;
}());
exports.Product2 = Product2;
