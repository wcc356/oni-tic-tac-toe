import Phaser from 'phaser'
import { ChessKeys } from '../entities/enums'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {

    }

    create() {
        this.add.image(100, 100, ChessKeys.LargeRed).setDisplaySize(100, 100)
        console.log('this is game scene')
    }
}