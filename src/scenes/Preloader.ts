import Phaser from 'phaser'

import { CastleTexture, ChessTexture, ChessTexture, SceneKeys, TutorialTextureKeys } from '../entities/Enums'

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Proloader)
    }

    preload() {
        // change the bg-color to reveal the logo(logo is white now)
        this.cameras.main.setBackgroundColor(0x3FA97D)

        //make a loading bar(via evt)
        this.createLoadingBar()

        this.load.image('idotno', 'idotno.png')
        this.loadChess()
        this.loadCastle()
    }

    create() {
        // reveal my name and logo
        this.revealLogo(1000)

        //let logo display several sec, then go to next scene
        this.time.delayedCall(3500, () => this.scene.start(SceneKeys.Start), [], this)

    }

    private loadChess() {
        // load chess
        this.load.image(ChessTexture.LargeRed, 'chess/largeRed.png')
        this.load.image(ChessTexture.MediumRed, 'chess/mediumRed.png')
        this.load.image(ChessTexture.SmallRed, 'chess/smallRed.png')
        this.load.image(ChessTexture.LargeBlue, 'chess/largeBlue.png')
        this.load.image(ChessTexture.MediumBlue, 'chess/mediumBlue.png')
        this.load.image(ChessTexture.SmallBlue, 'chess/smallBlue.png')
        this.load.image(ChessTexture.WeaponRed, 'chess/setsubun_akaoni.png')
        this.load.image(ChessTexture.WeaponBlue, 'chess/setsubun_aooni.png')
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

    private revealLogo(time) {
        const { width, height } = this.scale
        const text = this.add.text(width * 0.4, height * 0.2, 'idotno represent').setAlpha(0)
        const image = this.add.image(width * 0.5, height * 0.5, 'idotno').setAlpha(0).setTint(0xA8F6D6)
        this.tweens.add({
            targets: [text, image],
            duration: time,
            alpha: 1,
            ease: 'Linear'
        })
    }

    private createLoadingBar() {
        const { width, height } = this.scale
        const progressBoxWidth = 320
        const progressBoxHeight = 50
        const margin = 10

        // empty progressBar
        const progressBox = this.add.graphics()
            .fillStyle(0xDFDFE2, 1)
            .fillRect(width / 2 - progressBoxWidth / 2, height / 2 - progressBoxHeight,
                progressBoxWidth, progressBoxHeight)

        // 
        const progressBar = this.add.graphics()
        this.load.on('progress', (value) => {
            progressBar.clear()
                .fillStyle(0x51cc99, 1)
                .fillRect(width / 2 - progressBoxWidth / 2 + margin,
                    height / 2 - progressBoxHeight + margin,
                    (progressBoxWidth - 2 * margin) * value,
                    progressBoxHeight - 2 * margin)
        })

        this.load.on('complete', () => {
            progressBar.destroy()
            progressBox.destroy()
        })

    }