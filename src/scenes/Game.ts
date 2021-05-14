import Phaser from 'phaser'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'
import { CastleTexture, ChessTexture, ChessSize, ChessTeam } from '~/entities/Enums'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    create() {
        this.addChess()
        this.addCastle()
    }

    private addCastle() {
        const width: number = this.scale.width
        const height: number = this.scale.height
        const squareSide = 120
        const margin: = 10
        const firstPosition = { x: width / 2 - margin - squareSide, y: height / 2 - margin - squareSide }
        // castle[0] castle[1] castle[2]
        // castle[3] castle[4] castle[5]
        // castle[6] castle[7] castle[8]
        let castle = new Array
        for (let i = 0; i < 9; i++) {
            castle[i] = new Castle(this, firstPosition.x, firstPosition.y, squareSide, CastleTexture[`Castle${i}`])
            firstPosition.x += (margin + squareSide)
            if (i % 3 === 2) { firstPosition.x -= 3 * (margin + squareSide); firstPosition.y += (margin + squareSide) }
        }


        // let testzone = this.add.zone(width / 2, height / 2, squareSide, squareSide).setRectangleDropZone(squareSide, squareSide)
        // let testgraphics = this.add.graphics().lineStyle(2, 0xffff00).strokeRect(width / 2, height / 2, squareSide, squareSide)
    }

    private addChess() {
        const largeBlue1 = new Chess(this, 100, 100, ChessSize.Large, ChessTeam.Blue)
        const mediumRed1 = new Chess(this, 100, 200, ChessSize.Medium, ChessTeam.Red)
    }
}


