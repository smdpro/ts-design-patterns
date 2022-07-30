import { Factory as FactoryA ,ProductType as ProductTypeA} from "./factoryA/Facory";
import { Factory as FactoryB ,ProductType as ProductTypeB} from "./factoryB/Facory";
import { IProduct as IProductA } from "./factoryA/IProduct";
import { IProduct as IProductB } from "./factoryB/IProduct";
interface IProduct extends IProductA, IProductB {}
type ProductType= ProductTypeA | ProductTypeB;
export const ProductTypes={ ...ProductTypeA , ...ProductTypeB};
export class Factory {
    static create(type:ProductType):IProduct| undefined {
        if ([ProductTypeA.ProductAA as string, ProductTypeA.ProductAB, ProductTypeA.ProductAC].indexOf(type) > -1) 
                return FactoryA.create(type as ProductTypeA)
        if ([ProductTypeB.ProductBA as string, ProductTypeB.ProductBB, ProductTypeB.ProductBC].indexOf(type) > -1) 
                return FactoryB.create(type as ProductTypeB)    
        
    }
}