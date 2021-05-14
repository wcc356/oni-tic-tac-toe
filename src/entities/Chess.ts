import Phaser from 'phaser'
import { ChessTexture, ChessSize, ChessTeam } from './Enums'

export default class Chess extends Phaser.GameObjects.Image {
    private image: Phaser.GameObjects.Image

    constructor(scene: Phaser.Scene, x: number, y: number, size: ChessSize, team: ChessTeam) {
        const texture = `${size}${team}`
        super(scene, x, y, ChessTexture[texture])
        this.scene = scene
        this.image = this.scene.add.image(x, y, ChessTexture[texture]).setInteractive();
        switch (size) {
            case ChessSize.Large:
                this.image.setDisplaySize(100, 100)
                break
            case ChessSize.Medium:
                this.image.setDisplaySize(80, 80)
                break
            case ChessSize.Small:
                this.image.setDisplaySize(60, 60)
                break
        }

        // drag config
        this.scene.input.setDraggable(this.image)
        this.scene.input.on('dragstart', function (pointer, gameObject) {
            gameObject.setDepth(1)
        }, this.scene);
        this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
            gameObject.x = dragX
            gameObject.y = dragY
        });
        this.scene.input.on('dragend', function (pointer, gameObject) {
            gameObject.setDepth(0)
        }, this.scene);

        //drop config
        this.scene.input.on('drop', function (pointer, gameObject, dropZone) {

            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;

            gameObject.input.enabled = true;

        });
    }
}

