import Phaser from 'phaser'

import Preloader from './scenes/Preloader'
import Game from './scenes/Game'
import End from './scenes/End'
import Start from './scenes/Start'
import Tutorial from './scenes/Tutorial'
import Menu from './scenes/Menu'


const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 844,
	height: 390,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
			gravity: { y: 200 }
		}
	},
	backgroundColor: '51cc99'
	scene: [Preloader, Game, Start, Menu, Tutorial, End]
}

export default new Phaser.Game(config)