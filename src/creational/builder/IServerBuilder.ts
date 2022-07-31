import { IVPC } from "./vpc";

export interface IServerBuilder{
    setRAM(gigabait:number):this;
    setCPU(core:number):this;
    setSSD(ssd:number):this;
    build(): IVPC
}