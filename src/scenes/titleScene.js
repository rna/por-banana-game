import Phaser from 'phaser';
import controls from '../assets/controls.png';

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
    this.load.image('controls', controls);
  }

  create() {
    this.add
      .text(400, 150, 'Enter your name', {
        font: '32px monospace',
        fill: '#fff',
      })
      .setOrigin(0.5, 0.5);

    this.add
      .dom(400, 200, 'input', {
        type: 'text',
        name: 'nameField',
        fontSize: '32px',
        color: 'white',
        backgroundColor: '#aaa',
        placeholder: 'Name',
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(400, 360, 'Game Controls', {
        font: '32px monospace',
        fill: '#adf',
        align: 'center',
        textDecoration: 'underline',
      })
      .setOrigin(0.5, 0.5);

    this.add.image(400, 500, 'controls');
  }
}
