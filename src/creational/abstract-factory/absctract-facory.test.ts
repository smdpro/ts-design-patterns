import { Factory,ProductTypes} from "./AbsctractFacory";
describe("Factory(A) test",()=>{
    it("should return product AA",()=>{
      let product=Factory.create(ProductTypes.ProductAA);  
      expect(product?.name).toBe('Product AA')
    });
    it("should return product AB",()=>{
       let product=Factory.create(ProductTypes.ProductAB);  
      expect(product?.name).toBe('Product AB')
    });
    it("should return product AC",()=>{
      let product=Factory.create(ProductTypes.ProductAC);  
      expect(product?.name).toBe('Product AC')
    })
})

describe("Factory(B) test",()=>{
    it("should return product BA",()=>{
      let product=Factory.create(ProductTypes.ProductBA);  
      expect(product?.name).toBe('Product BA')
    });
    it("should return product BB",()=>{
       let product=Factory.create(ProductTypes.ProductBB);  
      expect(product?.name).toBe('Product BB')
    });
    it("should return product BC",()=>{
      let product=Factory.create(ProductTypes.ProductBC);  
      expect(product?.name).toBe('Product BC')
    })
})