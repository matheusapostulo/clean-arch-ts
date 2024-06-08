import Product from "./products"

describe("products unit test", () => {
    it("Should have a name", () => {
        const product = new Product("iPhone");
        product.name = "Product 1";
        expect(product.name).toBe("Product 1");
    })

    it("Should throw an error if cost is negative", () => {
        const product = new Product("iPhone");
        expect(() => {
            product.cost = -1;
        }).toThrow("Cost cannot be negative")
    })

    it("Should set the cost of a product", () => {
        const product = new Product("iPhone")
        product.cost = 100;
        expect(product.cost).toBe(100)
    })

    it("Should set salesPrice by 3 times the cost of the product", () => {
        const product = new Product("iPhone")
        product._cost = 100
        expect(product.salesPrice).toBe(300)

    })
})