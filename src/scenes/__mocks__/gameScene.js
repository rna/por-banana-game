import Phaser from 'phaser';

import forest from '../assets/Forest_layer.png';
import run1 from '../assets/Run/Run1.png';
import run2 from '../assets/Run/Run2.png';
import run3 from '../assets/Run/Run3.png';
import run4 from '../assets/Run/Run4.png';
import run5 from '../assets/Run/Run5.png';
import run6 from '../assets/Run/Run6.png';
import run7 from '../assets/Run/Run7.png';
import banana from '../assets/Banana.png';
import enemy from '../assets/EvilCat.png';
import Jump1 from '../assets/Jump/Jump1.png';
import Jump2 from '../assets/Jump/Jump2.png';
import Jump3 from '../assets/Jump/Jump3.png';
import Jump4 from '../assets/Jump/Jump4.png';
import Jump5 from '../assets/Jump/Jump5.png';
import Jump6 from '../assets/Jump/Jump6.png';
import Jump7 from '../assets/Jump/Jump7.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('bg', forest);

    this.load.image('run1', run1);
    this.load.image('run2', run2);
    this.load.image('run3', run3);
    this.load.image('run4', run4);
    this.load.image('run5', run5);
    this.load.image('run6', run6);
    this.load.image('run7', run7);

    this.load.image('banana', banana);
    this.load.image('enemy', enemy);

    this.load.image('Jump1', Jump1);
    this.load.image('Jump2', Jump2);
    this.load.image('Jump3', Jump3);
    this.load.image('Jump4', Jump4);
    this.load.image('Jump5', Jump5);
    this.load.image('Jump6', Jump6);
    this.load.image('Jump7', Jump7);
  }

  create() {
    this.background = this.add.tileSprite(0, 0, 800, 600, 'bg');
    this.background.setOrigin(0, 0);
    this.game.score = 0;

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

    this.anims.create({
      key: 'jump',
      frames: [
        { key: 'Jump1' },
        { key: 'Jump2' },
        { key: 'Jump3' },
        { key: 'Jump4' },
        { key: 'Jump5' },
        { key: 'Jump6' },
        { key: 'Jump7' },
      ],
      frameRate: 10,
      repeat: 1,
    });

    this.player = this.physics.add.sprite(100, 500, 'run1').play('run');
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(100, 180);

    this.cursors = this.input.keyboard.createCursorKeys();

    this.bananas = this.physics.add.group({
      key: 'banana',
      repeat: 4,
      setXY: { x: 400, y: 500, stepX: 120 },
    });

    this.enemies = this.physics.add.group();

    this.physics.add.overlap(
      this.player,
      this.bananas,
      this.collectBanana,
      null,
      this,
    );

    this.physics.add.collider(
      this.player,
      this.enemies,
      this.hitEnemy,
      null,
      this,
    );

    this.scoreText = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      fill: '#000',
    });
  }

  update() {
    if (this.player.x > 700) {
      this.player.setPosition(100, 500);

      const enemy = this.enemies.create(750, 500, 'enemy');
      enemy.setVelocityX(-160);
      enemy.body.setSize(100, 140);

      this.bananas.children.iterate((child) => {
        child.enableBody(false, child.x, 500, true, true);
        child.setVelocityX(-80);
      });
    }

    if (this.cursors.left.isDown && !this.game.gameOver) {
      this.player.setFlip(true, false);
      this.player.setVelocityX(-180);
      this.player.anims.play('run', true);
      this.background.tilePositionX -= 5;
    } else if (this.cursors.right.isDown && !this.game.gameOver) {
      this.player.setFlip(false, false);
      this.player.setVelocityX(180);
      this.player.anims.play('run', true);
      this.background.tilePositionX += 5;
    } else if (this.cursors.up.isDown && !this.game.gameOver) {
      this.player.setFlip(false, false);
      this.player.setVelocity(180, -300);
      this.player.setGravityY(500);
      this.player.anims.play('jump', true);
    } else if (!this.cursors.right.isDown && !this.cursors.left.isDown) {
      this.player.body.setVelocityX(0);
    }

    if (this.game.gameOver === true) {
      const data = {
        score: this.game.score,
        user: this.game.playerName,
      };
      this.postScores(JSON.stringify(data));
      this.scene.start('End');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  collectBanana(player, banana) {
    banana.disableBody(true, true);
    this.game.score += 10;
    this.scoreText.setText(`Score: ${this.game.score}`);
  }

  hitEnemy() {
    this.physics.pause();
    this.player.setTint(0xff0000);
    this.player.anims.play('run', false);
    this.game.gameOver = true;
  }

  async postScores(data) { // eslint-disable-line class-methods-use-this
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xJaaYOvOiH8wnFAVEPTP/scores/';

    const fetchData = {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
      body: data,
    };

    return fetch(url, fetchData).then((response) => response.json());
  }
}
