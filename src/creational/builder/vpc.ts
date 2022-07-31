export interface IVPC{
cpu:number;
ram:number;
ssd:number;
}

export class VPC implements IVPC{
    cpu: number=0;
    ram: number=0;
    ssd: number=0;
    
}