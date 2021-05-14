import Phaser from 'phaser'
import { ChessTexture, ChessSize, ChessTeam } from './Enums'

enum ChessState {
    movable,
    immovable
}

export default class Chess extends Phaser.GameObjects.GameObject {
    private image: Phaser.GameObjects.Image

    constructor(scene: Phaser.Scene, x: number, y: number, texture: ChessTexture) {
        super(scene, 'Chess')
        this.scene = scene
        this.image = this.scene.add.image(x, y, texture).setInteractive();
        this.size = texture.split('-')[0]
        this.team = texture.split('-')[1]
        switch (ChessSize[this.size]) {
            case ChessSize.Large:
                this.image.setDisplaySize(105, 105)
                break
            case ChessSize.Medium:
                this.image.setDisplaySize(90, 90)
                break
            case ChessSize.Small:
                this.image.setDisplaySize(75, 75)
                break
        }
        this.image.setDepth(1)

        // drag config
        this.scene.input.setDraggable(this.image)
        this.scene.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setDepth(10)
        }, this.scene)
        this.scene.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX
            gameObject.y = dragY
        })
        this.scene.input.on('dragend', (pointer, gameObject) => {
            gameObject.setDepth(1)
        }, this.scene)

        // drop config
        this.scene.input.on('drop', (pointer, gameObject, dropZone) => {
            gameObject.x = dropZone.x
            gameObject.y = dropZone.y
            gameObject.input.enabled = true
        })
    }
}

