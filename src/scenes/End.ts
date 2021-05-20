import Phaser from 'phaser'
import { SceneKeys, ChessTeam } from '~/entities/Enums'


export default class End extends Phaser.Scene {
    constructor() {
        super(SceneKeys.End)
    }

    init(data) {
        this.winner = data.winner;
        this.move = data.move
    }


    create() {
        const { width, height } = this.scale;
        const x = width * 0.5;
        const y = height * 0.5;

        this.add.rectangle(x, y, width, height, '#ffffff', 0.5);



        this.add.text(
            x, y - width / 20,
            [`The Winner is ${this.winner} !`, `used ${this.move} steps`], {
            fontFamily: 'Arial Black',
            fontSize: '48px',
            color: '#F8F0EE',
            shadow: { fill: true, blur: 0, offsetY: 0 },
            padding: { left: 15, right: 15, top: 10, bottom: 10 },
            align: 'center'
        })
            .setOrigin(0.5)


        this.add.text(
            x, y * 1.3,
            'Click to back to start', {
            fontSize: '28px',
            color: '#FFFFFF',
            shadow: { fill: true, blur: 0, offsetY: 0 },
            padding: { left: 15, right: 15, top: 10, bottom: 10 }
        })
            .setOrigin(0.5)

        this.input.once('pointerdown', el => {
            this.scene.stop(SceneKeys.Game)
            this.scene.start(SceneKeys.Start)
        })

    }





