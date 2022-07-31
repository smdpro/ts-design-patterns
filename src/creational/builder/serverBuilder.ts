import { IServerBuilder } from "./IServerBuilder";
import { IVPC, VPC } from "./vpc";

export class ServerBuilder implements IServerBuilder {
    private vpc:IVPC;
    constructor(){
        this.vpc=new VPC()
    }
    setRAM(gigabait: number): this {
        this.vpc.ram=gigabait;
        return this;
    }
    setCPU(core: number): this {
        this.vpc.cpu=core;
        return this;
    }
    setSSD(ssd: number): this {
        this.vpc.ssd=ssd;
       return this;
    }

    build(): IVPC {
        return this.vpc;
    }



}