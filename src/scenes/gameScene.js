import Phaser from 'phaser';
import sky from '../assets/Sky.png';
import shrubs from '../assets/shrubs.png';
import ground from '../assets/ground.png';
import run1 from '../assets/Run/Run1.png';
import run2 from '../assets/Run/Run2.png';
import run3 from '../assets/Run/Run3.png';
import run4 from '../assets/Run/Run4.png';
import run5 from '../assets/Run/Run5.png';
import run6 from '../assets/Run/Run6.png';
import run7 from '../assets/Run/Run7.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('bg', sky);
    this.load.image('trees', shrubs);
    this.load.image('ground', ground);
    this.load.image('run1', run1);
    this.load.image('run2', run2);
    this.load.image('run3', run3);
    this.load.image('run4', run4);
    this.load.image('run5', run5);
    this.load.image('run6', run6);
    this.load.image('run7', run7);
  }

  create() {
    this.add.image(400, 300, 'bg');

    this.tree = this.add.tileSprite(0, 0, this.game.config.width, 0, 'trees');
    this.tree.setOrigin(0, 0);
    this.tree.setScrollFactor(0);

    this.ground = this.add.tileSprite(0, 0, this.game.config.width, 100, 'ground');
    this.ground.setOrigin(0, 0);
    this.ground.setScrollFactor(0);
    this.ground.y = 500;

    this.anims.create({
      key: 'run',
      frames: [
        { key: 'run1' },
        { key: 'run2' },
        { key: 'run3' },
        { key: 'run4' },
        { key: 'run5' },
        { key: 'run6' },
        { key: 'run7' },
      ],
      frameRate: 10,
      repeat: 1,
    });

    this.player = this.add.sprite(100, 500, 'blast0').play('run');

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
    } else if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
    }
  }
}
