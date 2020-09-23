import Phaser from 'phaser';
import controls from '../assets/controls.png';
import play from '../assets/play.png';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('controls', controls);
    this.load.image('play', play);
  }

  create() {
    this.add
      .text(400, 150, 'Enter your name', {
        font: '32px monospace',
        fill: '#fff',
      })
      .setOrigin(0.5, 0.5);

    this.input = this.add
      .dom(400, 200, 'input', {
        type: 'text',
        name: 'nameField',
        fontSize: '32px',
        color: 'white',
        backgroundColor: '#aaa',
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(400, 400, 'Game Controls', {
        font: '32px monospace',
        fill: '#adf',
        align: 'center',
        textDecoration: 'underline',
      })
      .setOrigin(0.5, 0.5);

    this.add.image(400, 500, 'controls');

    this.play = this.add.sprite(400, 300, 'play').setScale(0.3);

    this.play.setInteractive().on('pointerdown', () => {
      if (this.input.node.value) {
        this.scene.start('Game');
      }
    });
  }
}
