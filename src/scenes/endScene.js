import Phaser from 'phaser';
import replay from '../assets/replay.png';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('End');
  }

  preload() {
    this.load.image('replay', replay);
  }

  create() {
    this.add.text(400, 150, `Your Score: ${this.game.score}`, {
      font: '24px monospace',
      fill: '#fff',
    }).setOrigin(0.5, 0.5);

    this.replay = this.add.sprite(400, 300, 'replay').setScale(0.3);

    this.replay.setInteractive().on('pointerdown', () => {
      this.scene.start('Boot');
    });
  }
}
