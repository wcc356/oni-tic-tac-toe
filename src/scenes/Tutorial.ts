import Phaser, { Scene } from 'phaser'
import { ChessTexture, SceneKeys, TutorialTextureKeys, Video } from '~/entities/Enums'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'

export default class Tutorial extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Tutorial)
    }

    create() {
        this.backToMenuBtn()


    }

    private backToMenuBtn() {
        const { width, height } = this.scale
        this.add.rectangle(width - 90, height - 30, 130, 30, 0x000000, 1)
        const btn = this.add.rectangle(width - 90, height - 30, 130 - 5, 30 - 5, 0xffffff, 1)
        btn.setInteractive().once('pointerup', () => { this.scene.start(SceneKeys.Menu) })
        this.add.text(width - 90, height - 30, 'back to menu', { 'color': '0x000000' }).setOrigin(0.5)
    }
}