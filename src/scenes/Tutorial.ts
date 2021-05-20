import Phaser, { Scene } from 'phaser'
import { SceneKeys } from '~/entities/Enums'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'

export default class Tutorial extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Tutorial)
    }

    create() {
        console.log('tutorial')
        this.createCastle()




        this.input.once('pointerdown', el => { this.scene.start(SceneKeys.Game) })
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




}