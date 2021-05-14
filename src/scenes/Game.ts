import Phaser from 'phaser'
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
        this.addZone()
    }


    private addZone() {
        // set draggable zone
        const width: number = this.scale.width
        const height: number = this.scale.height
        const lengthOfSquare = 120
        const margin: = 10
        let zonePosition = { x: width / 2 - margin - lengthOfSquare, y: height / 2 - margin - lengthOfSquare }

        const zone: Phaser.GameObjects.Zone = new Array
        const graphics: Phaser.GameObjects.Graphics = new Array
        for (let i = 0; i < 9; i++) {
            zone[i] = this.add.zone(zonePosition.x, zonePosition.y, lengthOfSquare, lengthOfSquare);
            this.add.image(zonePosition.x, zonePosition.y, CastleTexture[`Castle${i}`]).setDisplaySize(lengthOfSquare, lengthOfSquare)
            // Just a visual display of the drop zone
            graphics[i] = this.add.graphics().lineStyle(2, 0xffff00)
            graphics[i].strokeRect(zone[i].x - lengthOfSquare / 2, zone[i].y - lengthOfSquare / 2, lengthOfSquare, lengthOfSquare)
            zonePosition.x += (margin + lengthOfSquare)
            if (i % 3 === 2) { zonePosition.x -= 3 * (margin + lengthOfSquare); zonePosition.y += (margin + lengthOfSquare) }
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


