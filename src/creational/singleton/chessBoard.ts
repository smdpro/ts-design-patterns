
export class ChessBoard {
    static instance: ChessBoard;

    constructor(public id: number) {
        if (ChessBoard.instance) {
            return ChessBoard.instance
        }
        ChessBoard.instance = this
    }
}