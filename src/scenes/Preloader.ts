import Phaser from 'phaser'
import { ChessKeys } from '../entities/enums'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        //load chesskey
        this.load.image(ChessKeys.LargeRed, 'chess/largeRed.png')
        this.load.image(ChessKeys.MediumRed, 'chess/mediumRed.png')
        this.load.image(ChessKeys.SmallRed, 'chess/smallRed.png')
        this.load.image(ChessKeys.LargeBlue, 'chess/largeBlue.png')
        this.load.image(ChessKeys.MediumBlue, 'chess/mediumRed.png')
        this.load.image(ChessKeys.SmallBlue, 'chess/smallBlue.png')

        //todo load castle

    }

    create() {

        this.scene.start('game')
    }
}
