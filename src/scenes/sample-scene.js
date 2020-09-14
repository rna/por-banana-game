import 'phaser';
import monkeysCouple from '../assets/MonkeyCouple.png';

export default class SampleScene extends Phaser.Scene {
  preload() {
    this.load.image('monkeys', monkeysCouple);
  }

  create() {
    this.add.text(100, 100, 'Hello Phaser!', { fill: '#0f0' });
    this.add.image(600, 400, 'monkeys');
  }
}