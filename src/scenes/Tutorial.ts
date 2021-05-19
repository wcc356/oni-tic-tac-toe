import Phaser, { Scene } from 'phaser'
import { SceneKeys } from '~/entities/Enums'

export default class Tutorial extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Tutorial)
    }

    create() {
        console.log('tutorial')

        this.input.once('pointerdown', el => { this.scene.start(SceneKeys.Game) })
    }




}