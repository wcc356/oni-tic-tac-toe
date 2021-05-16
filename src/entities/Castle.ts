import Phaser from 'phaser'
import { CastleTexture, ChessTeam } from '~/entities/Enums'

export default class Castle extends Phaser.GameObjects.Image {
    private graphics!: Phaser.GameObjects.Graphics
    private _owner: ChessTeam

    constructor(scene: Phaser.Scene, x: number, y: number, squareSide: number, castleTexture: CastleTexture) {
        super(scene, x, y, castleTexture)
        this.setDisplaySize(squareSide, squareSide)
        this.setInteractive()

        this.input.dropZone = true;
        this.owner: ChessTeam.None;

        // graphics
        const graphics = scene.add.graphics().lineStyle(2, 0xffff00)
            .strokeRect(x - squareSide / 2, y - squareSide / 2, squareSide, squareSide)


        //change background after change owner




        scene.add.existing(this)
    }


    preUpdate
}