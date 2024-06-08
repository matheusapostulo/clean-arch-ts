"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
describe("products unit test", () => {
    it("Should has a name", () => {
        const product = new products_1.default("iPhone");
        product.name = "Product 1";
        expect(product.name).toBe("Product 1");
    });
    it("Should throw an error if cost is negative", () => {
        const product = new products_1.default("iPhone");
        expect(() => {
            product.cost = -1;
        }).toThrow("Cost cannot be negative");
    });
    it("Should set the cost of a product", () => {
        const product = new products_1.default("iPhone");
        product.cost = 100;
        expect(product.cost).toBe(100);
    });
    it("Should set salesPrice by 3 times the cost of the product", () => {
        const product = new products_1.default("iPhone");
        product._cost = 100;
        expect(product.salesPrice).toBe(300);
    });
});
