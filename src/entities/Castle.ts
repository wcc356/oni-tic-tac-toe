import Phaser from 'phaser'
import { CastleTexture, ChessSize, ChessTeam } from '~/entities/Enums'

export default class Castle extends Phaser.GameObjects.Image {
    private graphics!: Phaser.GameObjects.Graphics
    private owner!: ChessTeam
    private background !: Phaser.GameObjects.Rectangle
    private size: ChessSize

    constructor(scene: Phaser.Scene, x: number, y: number, squareSide: number, castleTexture: CastleTexture) {
        super(scene, x, y, castleTexture)
        this.setDisplaySize(squareSide, squareSide)
        this.setInteractive()

        this.input.dropZone = true;
        this.owner: ChessTeam.None;
        this.size = -1;

        // default background = white
        this.background = this.scene.add.rectangle(x, y, squareSide, squareSide, 0xffffff)

        scene.add.existing(this)
    }

    // according owner to change background
    private get _owner() {
        return this.owner
    }
    private set owner(team: ChessTeam) {
        this.background.fillColor = team === ChessTeam.Red ? 0xff7983 : 0x7878ff
    }



}