import Phaser from 'phaser'
import Castle from '~/entities/Castle'
import Chess from '~/entities/Chess'
import { CastleTexture, ChessTexture, ChessSize, ChessTeam } from '~/entities/Enums'

export default class Game extends Phaser.Scene {
    constructor() {
        super('game')
    }

    preload() {

    }

    create() {
        const largeBlue1 = new Chess(this, 100, 100, ChessSize.Large, ChessTeam.Blue)
        const mediumRed1 = new Chess(this, 100, 200, ChessSize.Medium, ChessTeam.Red)
        this.addChess()
        this.addCastle()
    }


    private addCastle() {
        const width: number = this.scale.width
        const height: number = this.scale.height
        const squareSide = 120
        const margin: = 10
        let firstPosition = { x: width / 2 - margin - squareSide, y: height / 2 - margin - squareSide }
        // castle[0] castle[1] castle[2]
        // castle[3] castle[4] castle[5]
        // castle[6] castle[7] castle[8]
        let castle = new Array
        for (let i = 0; i < 9; i++) {
            castle[i] = new Castle(this, firstPosition.x, firstPosition.y, squareSide, CastleTexture[`Castle${i}`])
            firstPosition.x += (margin + squareSide)
            if (i % 3 === 2) { firstPosition.x -= 3 * (margin + squareSide); firstPosition.y += (margin + squareSide) }
        }
    }








    private addChess() {
        // const largeRed = this.add.image(100, 100, ChessTexture.LargeBlue).setDisplaySize(100, 100)
        // this.makeChessDragabke(largeRed)
    }

    // privete makeChessDragabke(chess) {
    //     

    //     this.input.on('dragenter', function (pointer, gameObject, dropZone) {
    //         graphics.clear();
    //         graphics.lineStyle(2, 0x00ffff);
    //         graphics.strokeRect(zone.x - lengthOfSquare / 2, zone.y - lengthOfSquare / 2, lengthOfSquare, lengthOfSquare)
    //     });

    //     this.input.on('dragleave', function (pointer, gameObject, dropZone) {

    //         graphics.clear();
    //         graphics.lineStyle(2, 0xffff00);
    //         graphics.strokeRect(zone.x - lengthOfSquare / 2, zone.y - lengthOfSquare / 2, lengthOfSquare, lengthOfSquare)
    //     });

    //     this.input.on('drop', function (pointer, gameObject, dropZone) {

    //         gameObject.x = dropZone.x;
    //         gameObject.y = dropZone.y;

    //         gameObject.input.enabled = false;

    //     });

    //     this.input.on('dragend', function (pointer, gameObject, dropped) {

    //         if (!dropped) {
    //             gameObject.x = gameObject.input.dragStartX;
    //             gameObject.y = gameObject.input.dragStartY;
    //         }

    //         graphics.clear();
    //         graphics.lineStyle(2, 0xffff00);
    //         graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

    //     });
    // }
}


