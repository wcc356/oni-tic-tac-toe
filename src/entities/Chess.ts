import Phaser from 'phaser'
import Castle from './Castle'
import { ChessTexture, ChessSize, ChessTeam } from './Enums'

enum ChessState {
    movable,
    immovable
}

export default class Chess extends Phaser.GameObjects.Image {
    private size: ChessSize
    private team: ChessTeam

    constructor(scene: Phaser.Scene, x: number, y: number, texture: ChessTexture) {
        super(scene, x, y, texture)
        this.size = ChessSize[texture.split('-')[0]]
        this.team = ChessTeam[texture.split('-')[1]]

        // according given size to set displaysize
        switch (this.size) {
            case ChessSize.Large:
                this.setDisplaySize(105, 105)
                this.strength = ChessSize.Large
                break
            case ChessSize.Medium:
                this.setDisplaySize(90, 90)
                this.strength = ChessSize.Medium
                break
            case ChessSize.Small:
                this.setDisplaySize(75, 75)
                this.strength = ChessSize.Small
                break
        }
        this.setDepth(1)


        ///dragconfig///
        this.setInteractive({
            draggable: true,
            dropZone: false
        })

        // tint obj and always beyond others
        this.on('dragstart', (pointer, dragX, dragY) => {
            scene.children.bringToTop(this)
            this.setTint(
                this.team === ChessTeam.Blue ? 0x7878ff : 0xF05654)
        })
        // drag 
        this.on('drag', (pointer, dragX, dragY) => {
            this.x = dragX
            this.y = dragY
        }, scene)

        // tint the castle
        this.on('dragenter', (pointer, target) => {
            target.setTint(
                this.team === ChessTeam.Blue ? 0x7878ff : 0xF20c00)
        }, scene)

        this.on('dragleave', (pointer, target) => {
            target.clearTint()
        }, scene)

        // drop to the dropzone center
        this.on('drop', (pointer, target: Castle) => {
            this.x = target.x
            this.y = target.y
            this.input.enabled = true
            // change the castle owner
            target.owner = this.team
            target.clearTint()
        }, scene)

        // dropfailed back to start position, clearTint
        this.on('dragend', (pointer, dragX, dragY, dropped) => {
            if (!dropped) {
                this.x = this.input.dragStartX
                this.y = this.input.dragStartY
            }
            this.clearTint();
        }, scene)

        // chess is movable?
        switch (ChessState) {
            case ChessState.movable:
                this.image.setInteractive()
                break
            case ChessState.immovable:
                this.image.disableInteractive()
                break
        }

        scene.add.existing(this)
    }
}

