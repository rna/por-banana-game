import Phaser from 'phaser';
import sky from '../assets/Sky.png';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import cloud3 from '../assets/cloud3.png';
import shrubs from '../assets/shrubs.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('background', sky);
    this.load.image('cloud1', cloud1);
    this.load.image('cloud2', cloud2);
    this.load.image('cloud3', cloud3);
    this.load.image('trees', shrubs);
  }

  create() {
    this.add.image(400, 300, 'background');
    this.cloud1 = this.add.image(300, 80, 'cloud1');
    this.cloud2 = this.add.image(500, 90, 'cloud2');
    this.cloud3 = this.add.image(700, 70, 'cloud3');
    this.tree = this.add.tileSprite(0, 400, 0, 0, 'trees');
  }

  update() {
    this.cloud1.x -= 0.3;
    if (this.cloud1.x < -350) {
      this.cloud1.x = 1150;
    }
    this.cloud2.x -= 0.2;
    if (this.cloud2.x < -350) {
      this.cloud2.x = 1150;
    }
    this.cloud3.x -= 0.1;
    if (this.cloud3.x < -350) {
      this.cloud3.x = 1150;
    }
    this.tree.x -= 5;
    if (this.tree.x < 0) {
      this.tree.x = 800;
    }
  }
}
