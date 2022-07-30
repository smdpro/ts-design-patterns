import { IProduct } from "./IProduct";
import { ProductA,ProductB,ProductC } from "./products/index";

export enum ProductType {ProductA,ProductB,ProductC}

export class Factory {
    static create(type:ProductType):IProduct {
        switch (type) {
            case ProductType.ProductA:
                return new ProductA('Product A')
            case ProductType.ProductB:
                return new ProductB('Product B')
            default:
                return new ProductC('Product C')
        }
    }
}