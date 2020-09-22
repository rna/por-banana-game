import Phaser from 'phaser';
import wallpaper from '../assets/boot.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', wallpaper);
  }

  create() {
    this.background = this.add.sprite(0, 0, 'background');
    this.background.setOrigin(0, 0);

    this.textStart = this.add.text(400, 300, 'Press space to start', { font: '32px Arial', fill: '#000' });

    this.cursor = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursor.space.isDown) {
      this.scene.start('GameScene');
    }
  }
}
