export default class BootScene {

  preload() {
    this.load.image('background', wallpaper);
    this.load.image('bananas', bananas);
    this.load.image('monkey', monkey);
  }

  create() {
    this.background = this.add.sprite(0, 0, 'background');
    this.background.setOrigin(0, 0);
    this.add.image(450, 350, 'bananas').setScale(0.3);
    this.add.image(250, 350, 'monkey');

    this.textStart = this.add.text(250, 500, 'Press space to start', { font: '32px Arial', fill: '#000' });

    this.cursor = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursor.space.isDown) {
      this.scene.start('Title');
    }
  }
}
