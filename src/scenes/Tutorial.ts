import Phaser, { Scene } from 'phaser'
import { ChessTexture, SceneKeys, TutorialTextureKeys, Video } from '~/entities/Enums'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'

export default class Tutorial extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Tutorial)
    }

    create() {
        const { width, height } = this.scale;

        // large > mid > small
        let image = this.add.image(width / 2, height / 10, TutorialTextureKeys.Image).setDisplaySize(width / 4, height / 4)




        // tutorial video
        let video = this.add.video(width / 2, height / 2 + 10, TutorialTextureKeys.Video).setDisplaySize(width * 2 / 3, height * 2 / 3)
        video.play(true)
        video.setLoop(true)
        this.add.text(
            width / 2, height * 9 / 10,
            'This is tutorial,Click to start the game', {
            fontSize: '28px',
            color: '#000000',
            shadow: { fill: true, blur: 0, offsetY: 0 },
            padding: { left: 15, right: 15, top: 10, bottom: 10 }
        })
            .setOrigin(0.5)

        this.input.once('pointerdown', el => { this.scene.start(SceneKeys.Game) })
    }






}