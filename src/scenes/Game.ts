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
        const margin = 10
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
    }

    private addChess() {
        // create chess
        let x = 65
        let y = 70
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < 2; j++) {
                for (let k = 2; k >= 0; k--) {
                    const texture = ChessSize[k] + ChessTeam[i]
                    new Chess(this, x, y, ChessTexture[texture])
                    y += (100 - (2 - k) * 15)
                }
                x += 100
                y = 70
            }
            x += this.scale.width / 2
        }

        //









        // new Chess(this, x, y, ChessTexture.LargeBlue)
        // new Chess(this, 200, 100, ChessTexture.LargeBlue)
        // new Chess(this, 100, 200, ChessTexture.MediumBlue)
        // new Chess(this, 200, 200, ChessTexture.MediumBlue)
        // new Chess(this, 100, 300, ChessTexture.SmallBlue)
        // new Chess(this, 200, 300, ChessTexture.SmallBlue)
    }
}


