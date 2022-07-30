import { Factory ,ProductType} from "./Facory";
describe("Factory just B test",()=>{
    it("should return product A",()=>{
      let product=Factory.create(ProductType.ProductBA);  
      expect(product.name).toBe('Product BA')
    });
    it("should return product B",()=>{
      let product=Factory.create(ProductType.ProductBB);  
      expect(product.name).toBe('Product BB')
    });
    it("should return product C",()=>{
      let product=Factory.create(ProductType.ProductBC);  
      expect(product.name).toBe('Product BC')
    })
})