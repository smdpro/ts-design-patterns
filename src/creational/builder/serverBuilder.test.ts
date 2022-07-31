import {ServerBuilder} from "./serverBuilder";
describe("Server Builder",()=>{
    it("should return vpc (2 core,4G ram,50G SSD)",()=>{
      let vpc= new ServerBuilder().setCPU(2).setRAM(4).setSSD(50).build();  
      expect(vpc.cpu).toBe(2)
      expect(vpc.ram).toBe(4)
      expect(vpc.ssd).toBe(50)
    });

    it("should return vpc (0 core,0G ram,0G SSD)",()=>{
      let vpc= new ServerBuilder().build();  
      expect(vpc.cpu).toBe(0)
      expect(vpc.ram).toBe(0)
      expect(vpc.ssd).toBe(0)
    });
    
})