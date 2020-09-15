import Phaser from 'phaser';
import sky from '../assets/Sky.png';
import shrubs from '../assets/shrubs.png';
import ground from '../assets/ground.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('background', sky);
    this.load.image('trees', shrubs);
    this.load.image('ground', ground);
  }

  create() {
    this.add.image(400, 300, 'background');
    this.tree = this.add.tileSprite(0, 0, this.game.config.width, 0, 'trees');
    this.tree.setOrigin(0, 0);
    this.tree.setScrollFactor(0);
    this.ground = this.add.tileSprite(0, 0, this.game.config.width, 96, 'ground');
    this.ground.setOrigin(0, 0);
    this.ground.setScrollFactor(0);
    this.ground.y = 500;
  }

  update() {
  }
}
