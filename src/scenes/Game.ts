import Phaser from 'phaser'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'
import test from '~/entities/Castle'
import { CastleTexture, ChessTexture, ChessSize, ChessTeam } from '~/entities/Enums'

export default class Game extends Phaser.Scene {
    private chess!: Phaser.Physics.Arcade.Group

    constructor() {
        super('game')
    }

    create() {
        this.createChess()
        this.createCastle()
    }

    private createCastle() {
        const width: number = this.scale.width
        const height: number = this.scale.height
        const squareSide = 120
        const margin = 10
        const originPoint = { x: width / 2 - margin - squareSide, y: height / 2 - margin - squareSide }

        // castles[0] castles[1] castles[2]
        // castles[3] castles[4] castles[5]
        // castles[6] castles[7] castles[8]
        this.castles = new Array
        for (let i = 0; i < 9; i++) {
            this.castles.push(new Castle(this, originPoint.x, originPoint.y, squareSide, CastleTexture[`Castle${i}`]))
            originPoint.x += (margin + squareSide)
            if (i % 3 === 2) { originPoint.x -= 3 * (margin + squareSide); originPoint.y += (margin + squareSide) }
        }
    }

    private createChess() {
        // create redChess
        let [x, y] = [65, 70]
        let chessgroup = new Array
        for (let i = 0; i < 2; i++) {
            for (let j = 2; j >= 0; j--) {
                chessgroup.push(new Chess(this, x, y, ChessTexture[ChessSize[j] + ChessTeam[0]]))
                y += (100 - (2 - j) * 15) //micro adjust prettier
            }
            [x, y] = [x + 100, 70]
        }
        // create blueChess
        x += this.scale.width / 2
        for (let i = 0; i < 2; i++) {
            for (let j = 2; j >= 0; j--) {
                chessgroup.push(new Chess(this, x, y, ChessTexture[ChessSize[j] + ChessTeam[1]]))
                y += (100 - (2 - j) * 15) //micro adjust prettier
            }
            [x, y] = [x + 100, 70]
        }
    }


}


