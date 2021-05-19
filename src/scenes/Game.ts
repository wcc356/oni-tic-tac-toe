import Phaser, { Scene } from 'phaser'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'
import test from '~/entities/Castle'
import { CastleTexture, ChessTexture, ChessSize, ChessTeam, SceneKeys } from '~/entities/Enums'

export default class Game extends Phaser.Scene {
    private chess!: Phaser.Physics.Arcade.Group
    private move: number

    constructor() {
        super('game')
        this.move = 0
    }

    create() {
        this.createCastle()
        this.createChess()
        this.hasWinner()
    }

    private createCastle() {
        const width!: number = this.scale.width
        const height!: number = this.scale.height
        const squareSide !: number = 120
        const margin !: number = 10
        const originPoint !: number = { x: width / 2 - margin - squareSide, y: height / 2 - margin - squareSide }

        // castles[0] castles[1] castles[2]
        // castles[3] castles[4] castles[5]
        // castles[6] castles[7] castles[8]
        this.castles = []
        for (let i = 0; i < 9; i++) {
            let x = originPoint.x + (i % 3) * (margin + squareSide)
            let y = originPoint.y + Math.floor(i / 3) * (margin + squareSide)
            this.castles.push(new Castle(this, x, y, squareSide, CastleTexture[`Castle${i}`]))
        }
    }

    private createChess() {
        // create redChess
        let [x, y] = [65, 70]
        this.chessGroup = []
        for (let i = 0; i < 2; i++) {
            for (let j = 3; j > 0; j--) {
                this.chessGroup.push(new Chess(this, x, y, ChessTexture[ChessSize[j] + ChessTeam[0]]))
                y += (100 - (2 - j) * 15) //micro adjust prettier
            }
            [x, y] = [x + 100, 70]
        }


        // create blueChess
        x += this.scale.width / 2
        for (let i = 0; i < 2; i++) {
            for (let j = 3; j > 0; j--) {
                this.chessGroup.push(new Chess(this, x, y, ChessTexture[ChessSize[j] + ChessTeam[1]]))
                y += (100 - (2 - j) * 15) //micro adjust prettier
            }
            [x, y] = [x + 100, 70]
        }
    }

    private hasWinner() {
        this.input.on('drop', (pointer, gameObject, target) => {
            // check winner

            //012
            if (this.castles[0].teamArr[0] === this.castles[1].teamArr[0] &&
                this.castles[0].teamArr[0] === this.castles[2].teamArr[0] &&
                this.castles[0].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }
            // 036
            else if (this.castles[0].teamArr[0] === this.castles[3].teamArr[0] &&
                this.castles[0].teamArr[0] === this.castles[6].teamArr[0] &&
                this.castles[0].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//048
            else if (this.castles[0].teamArr[0] === this.castles[4].teamArr[0] &&
                this.castles[0].teamArr[0] === this.castles[8].teamArr[0] &&
                this.castles[0].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//147
            else if (this.castles[1].teamArr[0] === this.castles[4].teamArr[0] &&
                this.castles[1].teamArr[0] === this.castles[7].teamArr[0] &&
                this.castles[1].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//258
            else if (this.castles[2].teamArr[0] === this.castles[5].teamArr[0] &&
                this.castles[2].teamArr[0] === this.castles[8].teamArr[0] &&
                this.castles[2].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//246
            else if (this.castles[2].teamArr[0] === this.castles[4].teamArr[0] &&
                this.castles[2].teamArr[0] === this.castles[6].teamArr[0] &&
                this.castles[2].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//345
            else if (this.castles[3].teamArr[0] === this.castles[4].teamArr[0] &&
                this.castles[3].teamArr[0] === this.castles[5].teamArr[0] &&
                this.castles[3].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }//678
            else if (this.castles[6].teamArr[0] === this.castles[7].teamArr[0] &&
                this.castles[6].teamArr[0] === this.castles[8].teamArr[0] &&
                this.castles[6].teamArr[0] !== ChessTeam.None) {
                this.winner(gameObject.team)
            }
        }
    }
    private winner(winner) {
        console.log(`${ChessTeam[winner]} is winner`)
        for (let chess of this.chessGroup) {
            chess.clearTint()
        }
        this.scene.start(SceneKeys.End, { winner: winner, move: this.move })
    }

}


