import { IProduct } from "./IProduct";
import { ProductA,ProductB,ProductC } from "./products/index";

export enum ProductType {ProductBA='BA',ProductBB='BB',ProductBC='BC'}

export class Factory {
    static create(type:ProductType):IProduct {
        switch (type) {
            case ProductType.ProductBA:
                return new ProductA('Product BA')
            case ProductType.ProductBB:
                return new ProductB('Product BB')
            default:
                return new ProductC('Product BC')
        }
    }
}