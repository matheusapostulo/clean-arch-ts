import { response } from "express";
import { app, sequelize } from "../express"
import request from "supertest";

describe("E2E test for product", () => {
    beforeEach(async () => {
        await sequelize.sync({force: true});
    });

    afterAll(async () => {
        await sequelize.close();
    });

    it("Should create a product", async () => {
        const product = {
            id: "1",
            name: "Product 1",
            cost: 100
        }

        const response = await request(app).post("/product").send(product);
        expect(response.status).toBe(200)
        expect(response.body).toEqual({
            id: "1",
            name: "Product 1",
            cost: 100,
            salesPrice: 300,
        })
    })

})