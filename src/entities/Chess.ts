import Phaser from 'phaser'
import Castle from './Castle'
import { ChessTexture, ChessSize, ChessTeam } from './Enums'

export default class Chess extends Phaser.GameObjects.Image {
    private size: ChessSize
    private team: ChessTeam

    constructor(scene: Phaser.Scene, x: number, y: number, texture: ChessTexture) {
        super(scene, x, y, texture)
        // size, team ,castle(default=null)
        this.size = ChessSize[texture.split('-')[0]]
        this.team = ChessTeam[texture.split('-')[1]]
        this.castle = null

        // according given size to set displaysize
        switch (this.size) {
            case ChessSize.Large:
                this.setDisplaySize(105, 105)
                break
            case ChessSize.Medium:
                this.setDisplaySize(90, 90)
                break
            case ChessSize.Small:
                this.setDisplaySize(75, 75)
                break
        }

        // make sure upper than castle
        this.setDepth(1)

        // =================dragconfig====================
        this.setInteractive({
            draggable: true
        })

        // tint chosen obj and always beyond others
        this.on('dragstart', (pointer, dragX, dragY) => {
            scene.children.bringToTop(this)
            this.setTint(
                this.team === ChessTeam.Red ? 0xF05654 : 0x7878ff)
        })

        this.on('drag', (pointer, dragX, dragY) => {
            this.x = dragX
            this.y = dragY
        }, scene)

        // tint the chosen castle
        this.on('dragenter', (pointer, target) => {
            target.setTint(
                this.team === ChessTeam.Red ? 0xF20c00 : 0x7878ff)
        }, scene)

        this.on('dragleave', (pointer, target) => {
            target.clearTint()
        }, scene)

        // drop to the dropzone center
        this.on('drop', (pointer, target: Castle) => {
            // check drop possibility
            // same position => back and cleartint
            // less the size => back and cleartint 
            if (this.castle === target || this.size <= target.size) {
                this.x = this.input.dragStartX
                this.y = this.input.dragStartY
                target.clearTint()
                this.clearTint()
                return
            }

            this.x = target.x
            this.y = target.y
            target.clearTint()
            this.clearTint()

            // upgrate old castle owner and size
            if (this.castle) {
                this.castle.teamArr.shift()
                this.castle.owner = this.castle.teamArr[0]
                this.castle.sizeArr.shift()
                this.castle.size = this.castle.sizeArr[0]
            }

            // add new castle owner and size
            this.castle = target
            target.teamArr.unshift(this.team)
            target.owner = target.teamArr[0]
            target.sizeArr.unshift(this.size)
            target.size = target.sizeArr[0]

            // change player, only one player can move once time
            for (let chess of scene.chessGroup) {
                chess.input.draggable = true;
                chess.clearTint()
                if (chess.team === this.team) {
                    chess.input.draggable = false
                    chess.setTint(0x999999)
                }
            }

            scene.move += 1
        })

        // dropfailed back to start position, clearTint
        this.on('dragend', (pointer, dragX, dragY, dropped) => {
            if (!dropped) {
                this.x = this.input.dragStartX
                this.y = this.input.dragStartY
                this.clearTint();
            }, scene)
        this.clearTint()

        scene.add.existing(this)
    }
    create() {

    }

}

