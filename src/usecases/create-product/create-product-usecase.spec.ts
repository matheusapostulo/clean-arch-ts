import CreateProductUseCase from "./create-product.usecase";

describe("Create product usecase unit test", () => {
    it("Should create a product", async() => {
        // Dados de entrada
        const input = {
            id: "abc",
            name: "iPhone",
            cost: 100
        };
        // Dados de saída
        const output = {
            id: "abc",
            name: "iPhone",
            cost: 100,
            salesPrice: 300
        };

        const productGateway = () => {
            return{
                create: jest.fn(),
            };
        };

        // Execução do usecase
        const createProductUsecase = new CreateProductUseCase(productGateway());
        const result = await createProductUsecase.execute(input)
        expect(result).toEqual(output)
    })
})