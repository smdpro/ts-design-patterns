import { ChessBoard} from "./chessBoard";
describe("Singleton test",()=>{
    let board= new ChessBoard(1);
    it("should return new copy of document",()=>{
      let getBoard= ChessBoard.instance;
      expect(board.id).toBe(getBoard.id);
      // expect(doc.name == clone.name).toBeFalsy();

    });
    
})