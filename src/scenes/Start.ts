import Phaser from 'phaser'
import { SceneKeys } from '~/entities/Enums'

export default class Title extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Start)
    }
    create() {
        const { width, height } = this.scale;

        // text: ['Oni！', 'TicTocToe']
        this.add.text(
            width / 2, height * 0.4,
            ['Oni！', 'TicTocToe'],
            {
                fontFamily: 'Arial Black',
                fontSize: 64,
                color: '#EF424C',
                align: 'center',
                stroke: '#2D3440',
                strokeThickness: 14,
            })
            .setOrigin(0.5, 0.5);

        // text:'Click to Start the game'
        const press = this.add.text(
            width / 2, height * 0.7,
            'Click to Start the game', {
            fontSize: '32px',
            color: '#F8F0EE',
            padding: { left: 15, right: 15, top: 10, bottom: 10 }
        })
            .setStroke('#28DFDB', 3)
            .setShadow(2, 2, '#28DFDB', 2, false, false)
            .setOrigin(0.5);

        this.flashElement(this, press);
        this.input.once('pointerdown', el => { this.scene.start(SceneKeys.Game) })
    }

    // flash effect
    private flashElement(scene, element,
        repeat = true, easing = 'Linear',
        overallDuration = 1500, visiblePauseDuration = 500) {
        if (scene && element) {
            let flashDuration =
                overallDuration - visiblePauseDuration / 2;

            scene.tweens.timeline({
                tweens: [
                    {
                        targets: element,
                        duration: 0,
                        alpha: 0,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: flashDuration,
                        alpha: 1,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: visiblePauseDuration,
                        alpha: 1,
                        ease: easing
                    },
                    {
                        targets: element,
                        duration: flashDuration,
                        alpha: 0,
                        ease: easing,
                        onComplete: () => {
                            if (repeat === true) {
                                this.flashElement(scene, element);
                            }
                        }
                    }
                ]
            });
        }
    }
}