import { Factory ,ProductType} from "./Facory";
describe("Factory just A test",()=>{
    it("should return product A",()=>{
      let product=Factory.create(ProductType.ProductAA);  
      expect(product.name).toBe('Product AA')
    });
    it("should return product B",()=>{
      let product=Factory.create(ProductType.ProductAB);  
      expect(product.name).toBe('Product AB')
    });
    it("should return product C",()=>{
      let product=Factory.create(ProductType.ProductAC);  
      expect(product.name).toBe('Product AC')
    })
})