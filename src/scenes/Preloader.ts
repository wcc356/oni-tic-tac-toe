import Phaser from 'phaser'
import { CastleKeys, ChessKeys } from '../entities/Enums'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader')
    }

    preload() {
        this.loadChess()
        this.loadCastle()
    }

    create() {
        this.scene.start('game')
    }

    private loadChess() {
        // load chess
        this.load.image(ChessKeys.LargeRed, 'chess/largeRed.png')
        this.load.image(ChessKeys.MediumRed, 'chess/mediumRed.png')
        this.load.image(ChessKeys.SmallRed, 'chess/smallRed.png')
        this.load.image(ChessKeys.LargeBlue, 'chess/largeBlue.png')
        this.load.image(ChessKeys.MediumBlue, 'chess/mediumRed.png')
        this.load.image(ChessKeys.SmallBlue, 'chess/smallBlue.png')
    }

    private loadCastle() {
        //load castle
        this.load.image(CastleKeys.Castle1, 'castle/takedajou.png')
        this.load.image(CastleKeys.Castle2, 'castle/maruokajou.png')
        this.load.image(CastleKeys.Castle3, 'castle/kanazawajou.png')
        this.load.image(CastleKeys.Castle4, 'castle/himejijou.png')
        this.load.image(CastleKeys.Castle5, 'castle/inuyamajou.png')
        this.load.image(CastleKeys.Castle6, 'castle/nagoyajou.png')
        this.load.image(CastleKeys.Castle7, 'castle/oosakajou.png')
        this.load.image(CastleKeys.Castle8, 'castle/aduchijou.png')
        this.load.image(CastleKeys.Castle9, 'castle/kanazawajou.png')
    }
}
