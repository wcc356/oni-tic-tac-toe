import Phaser from 'phaser'

export default class Castle extends Phaser.GameObjects.Zone {
    private graphics!: Phaser.GameObjects.Graphics

    constructor(scene: Phaser.Scene, x: number, y: number, squareSide: number, castleTexture: Phaser.GameObjects.Image) {
        super(scene, x, y, squareSide, squareSide)
        this.scene = scene
        this.zone = this.scene.add.zone(x, y, squareSide, squareSide)
        // this.graphics = this.scene.add.graphics().lineStyle(2, 0xffff00)
        // this.graphics.strokeRect(this.zone.x - squareSide / 2, this.zone.y - squareSide / 2, squareSide, squareSide)
        // this.scene.add.image(x, y, castleTexture).setDepth()
    }
}