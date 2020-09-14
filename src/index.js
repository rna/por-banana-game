import 'phaser';

import SampleScene from './scenes/sample-scene';

const gameConfig = {
  width: 680,
  height: 400,
  scene: SampleScene,
};

new Phaser.Game(gameConfig);