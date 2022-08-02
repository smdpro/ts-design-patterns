import { Document} from "./document";
describe("Factory test",()=>{
    it("should return new copy of document",()=>{
      let doc= new Document("one.txt","hello world","txt");
      let clone= doc.clone();
      expect(doc.name).toBe(clone.name);
      clone.name="two.txt";
      expect(doc.name == clone.name).toBeFalsy();

    });
    
})