import express, {Express} from "express";
import ProductModel from "../../database/product.model";
import { Sequelize } from "sequelize-typescript";
import { productRouter } from "./routes/products.routes";

export const app: Express = express()

app.use(express.json())
app.use("/products", productRouter)

export let sequelize: Sequelize;

async function setupDb() {
    sequelize: Sequelize;
    sequelize = new Sequelize({
        dialect:"sqlite",
        storage: ":memory:",
        logging: false,
        sync: {force: true}
    });
    sequelize.addModels([ProductModel])
    await sequelize.sync()
}

setupDb()