import Phaser from 'phaser'
import { CastleTexture, ChessSize, ChessTeam } from '~/entities/Enums'

export default class Castle extends Phaser.GameObjects.Image {
    private graphics!: Phaser.GameObjects.Graphics
    private owner!: ChessTeam
    private background !: Phaser.GameObjects.Rectangle
    private size: ChessSize

    constructor(scene: Phaser.Scene, x: Number, y: Number, squareSide: Number, castleTexture: CastleTexture) {
        super(scene, x, y, castleTexture)
        this.setDisplaySize(squareSide, squareSide)
        //  make the squaare be the dropzone
        this.setInteractive()
        this.input.dropZone = true


        // default background = white
        this.background = this.scene.add.rectangle(x, y, squareSide, squareSide, 0xffffff)

        // make chess array and the first one is the owner
        this.sizeArr = [ChessSize.None]
        this.teamArr = [ChessTeam.None]
        this.owner = this.teamArr[0]
        this.size = this.sizeArr[0]

        scene.add.existing(this)
    }

    // according owner to change background
    private get _owner() {
        return this.owner
    }
    private set owner(team: ChessTeam) {
        switch (team) {
            case ChessTeam.Red:
                this.background.fillColor = 0xff7983
                break;
            case ChessTeam.Blue:
                this.background.fillColor = 0x7878ff
                break
            case ChessTeam.None:
                this.background.fillColor = 0xffffff
                break
        }
    }
}