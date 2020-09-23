import Phaser from 'phaser';

import config from './config/config';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import TitleScene from './scenes/titleScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.start('Title');
  }
}
window.game = new Game();