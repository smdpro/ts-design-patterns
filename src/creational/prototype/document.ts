import { IPrototype } from "./prototype";

export interface IDocument {
    content:string;
    name:string;
    type:string;
}

export class Document implements IPrototype,IDocument {
    
    constructor (public name:string,public content:string,public type:string){}
    clone(): IDocument {
      return JSON.parse(JSON.stringify(this)) as IDocument;   
    }

}