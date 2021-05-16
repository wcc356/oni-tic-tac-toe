import Phaser from 'phaser'

default export class Board extends Phaser.Geom.Rectangle {
    constructor(scene: Phaser.Scene, x: number, y: number, squareSide: number) {
        super(x, y, squareSide, squareSide)


        scene.add(this)
    }




}