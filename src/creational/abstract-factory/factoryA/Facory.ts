import { IProduct } from "./IProduct";
import { ProductA,ProductB,ProductC } from "./products/index";

export enum ProductType {ProductAA='AA',ProductAB='AB',ProductAC='AC'}

export class Factory {
    static create(type:ProductType):IProduct {
        switch (type) {
            case ProductType.ProductAA:
                return new ProductA('Product AA')
            case ProductType.ProductAB:
                return new ProductB('Product AB')
            default:
                return new ProductC('Product AC')
        }
    }
}