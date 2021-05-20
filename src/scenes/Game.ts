import Phaser, { Scene } from 'phaser'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'
import test from '~/entities/Castle'
import { CastleTexture, ChessTexture, ChessSize, ChessTeam, SceneKeys } from '~/entities/Enums'

export default class Game extends Phaser.Scene {
    private chess!: Phaser.Physics.Arcade.Group
    private move: number
    private noWinner: boolean

    constructor() {
        super('game')
        this.move = 0
        this.noWinner = true

    }

    create() {
        this.createCastle()
        this.createChess()
        this.winnerCondition()
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

    private winnerCondition() {
        this.checker = Array(9).fill(2)
        this.input.on('drop', (pointer, gameObject, target) => {
            // parameter target is castle, gameobj is current chess
            // setting win condition
            // red = 1, blue = -1, none = 0, if lineSum = 3 or -3 then win

            for (let castle of this.castles) {
                let i = this.castles.indexOf(castle)
                switch (this.castles[i].teamArr[0]) {
                    case ChessTeam.None:
                        this.checker[i] = 0
                        break
                    case ChessTeam.Red:
                        this.checker[i] = 1
                        break
                    case ChessTeam.Blue:
                        this.checker[i] = -1
                        break
                }
            }

            //check winner(without current point obj) make curObj = 0
            let currentCastleIndex = this.castles.indexOf(target)
            let tmp = this.checker[currentCastleIndex]
            this.checker[currentCastleIndex] = 0
            this.check()
            //check winner(with current obj) restore curObj 
            if (this.noWinner) {
                this.checker[currentCastleIndex] = tmp
                this.check()
            }



        }
    }

    private check() {
        //012
        this.sumLine(0, 1, 2)
        //036
        this.sumLine(0, 3, 6)
        //048
        this.sumLine(0, 4, 8)
        //147
        this.sumLine(1, 4, 7)
        //246
        this.sumLine(2, 4, 6)
        //258
        this.sumLine(2, 5, 8)
        //345
        this.sumLine(3, 4, 5)
        //678
        this.sumLine(6, 7, 8)
    }

    // sum line then check win condition
    private sumLine(i, j, k) {
        let result = this.checker[i] + this.checker[j] + this.checker[k]
        if (result === 3) {
            this.noWinner = false
            this.scene.launch(SceneKeys.End, { winner: 'red', move: this.move })
        } else if (result === -3) {
            this.noWinner = false
            this.scene.launch(SceneKeys.End, { winner: 'blue', move: this.move })
        }
    }
}





