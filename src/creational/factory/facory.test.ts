import { Factory ,ProductType} from "./Facory";
describe("Factory test",()=>{
    it("should return product A",()=>{
      let product=Factory.create(ProductType.ProductA);  
      expect(product.name).toBe('Product A')
    });
    it("should return product B",()=>{
      let product=Factory.create(ProductType.ProductB);  
      expect(product.name).toBe('Product B')
    });
    it("should return product C",()=>{
      let product=Factory.create(ProductType.ProductC);  
      expect(product.name).toBe('Product C')
    })
})