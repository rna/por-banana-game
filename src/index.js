import Phaser from 'phaser';

import config from './config/config';
import GameScene from './scenes/gameScene';
import BootScene from './scenes/bootScene';
import TitleScene from './scenes/titleScene';
import EndScene from './scenes/endScene';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Boot', BootScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Game', GameScene);
    this.scene.add('End', EndScene);
    this.scene.start('Boot');
  }
}
window.game = new Game();