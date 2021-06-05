import Phaser, { Scene } from 'phaser'
import { SceneKeys, ChessTexture } from '~/entities/Enums'


export default class Menu extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Menu)
    }

    create() {
        this.createBackgroudImage()
        this.createMenu()
    }

    private createBackgroudImage() {
        const { width, height } = this.scale
        this.add.image(width / 6, height / 2, ChessTexture.WeaponRed).setDisplaySize(width / 4, height / 2)
        this.add.image(width * (5 / 6), height / 2, ChessTexture.WeaponBlue).setDisplaySize(width / 4, height / 2)
    }

    private createMenu() {
        const { width, height } = this.scale
        const margin = 10

        // create play button
        this.createMenuButton(width * (1 / 2), height * (1 / 4), 'Play', margin, SceneKeys.Game)

        // create menu button
        this.createMenuButton(width * (1 / 2), height * (3 / 4), 'Tutorial', margin, SceneKeys.Tutorial)
    }

    private createMenuButton(x: Number, y: Number, text: String, margin: Number, scene: SceneKeys) {
        const { width, height } = this.scale
        this.add.rectangle(x, y, (1 / 4) * width, (1 / 8) * width, 0x000000, 1)
        const btn = this.add.rectangle(x, y, (1 / 4) * width - margin, (1 / 8) * width - margin, 0xffffff, 1)
        btn.setInteractive()
        btn.on('pointerdown', () => this.scene.start(scene))
        this.add.text(x, y, text, { 'color': '0x000000', 'fontSize': 30 }).setOrigin(0.5)
    }
}