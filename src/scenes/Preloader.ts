import Phaser from 'phaser'

import { CastleTexture, ChessTexture, ChessTexture, SceneKeys } from '../entities/Enums'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Proloader)
    }

    preload() {
        this.loadChess()
        this.loadCastle()
    }

    create() {
        this.scene.start(SceneKeys.Start)
    }

    private loadChess() {
        // load chess
        this.load.image(ChessTexture.LargeRed, 'chess/largeRed.png')
        this.load.image(ChessTexture.MediumRed, 'chess/mediumRed.png')
        this.load.image(ChessTexture.SmallRed, 'chess/smallRed.png')
        this.load.image(ChessTexture.LargeBlue, 'chess/largeBlue.png')
        this.load.image(ChessTexture.MediumBlue, 'chess/mediumBlue.png')
        this.load.image(ChessTexture.SmallBlue, 'chess/smallBlue.png')
    }

    private loadCastle() {
        //load castle
        this.load.image(CastleTexture.Castle0, 'castle/takedajou.png')
        this.load.image(CastleTexture.Castle1, 'castle/maruokajou.png')
        this.load.image(CastleTexture.Castle2, 'castle/kanazawajou.png')
        this.load.image(CastleTexture.Castle3, 'castle/himejijou.png')
        this.load.image(CastleTexture.Castle4, 'castle/inuyamajou.png')
        this.load.image(CastleTexture.Castle5, 'castle/nagoyajou.png')
        this.load.image(CastleTexture.Castle6, 'castle/oosakajou.png')
        this.load.image(CastleTexture.Castle7, 'castle/aduchijou.png')
        this.load.image(CastleTexture.Castle8, 'castle/kakegawajou.png')
    }
}