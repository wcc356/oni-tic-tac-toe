import Phaser from 'phaser'
import { CastleTexture, ChessTeam } from '~/entities/Enums'

export default class Castle extends Phaser.GameObjects.Zone {
    private graphics!: Phaser.GameObjects.Graphics
    private texture !: Phaser.GameObjects.Image
    private zone !: Phaser.GameObjects.Zone
    private owner !: ChessTeam

    constructor(scene: Phaser.Scene, x: number, y: number, squareSide: number, castleTexture: CastleTexture) {
        super(scene, x, y, squareSide, squareSide)
        this.owner = ChessTeam.None
        this.scene = scene
        this.zone = this.scene.add.zone(x, y, squareSide, squareSide).setRectangleDropZone(squareSide, squareSide)
        this.graphics = this.scene.add.graphics().lineStyle(2, 0xffff00)
        this.graphics.strokeRect(this.zone.x - squareSide / 2, this.zone.y - squareSide / 2, squareSide, squareSide)
        this.texture = this.scene.add.image(x, y, castleTexture).setDisplaySize(squareSide, squareSide)
    }
}