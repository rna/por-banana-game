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
    this.highScores = this.getScores();

    this.add
      .text(400, 150, `Your Score: ${this.game.score}`, {
        font: '24px monospace',
        fill: '#fff',
      })
      .setOrigin(0.5, 0.5);

    this.add
      .text(400, 250, 'Leader Board', {
        font: '32px monospace',
        fill: '#adf',
        align: 'center',
        textDecoration: 'underline',
      })
      .setOrigin(0.5, 0.5);

    this.highScores.sort((a, b) => b.score - a.score);

    for (let i = 0; i < 5; i += 1) {
      if (this.highScores[i]) {
        this.add.text(
          400,
          30 * i + 300,
          `${i + 1}    ${this.highScores[i].user}    ${
            this.highScores[i].score
          }`,
          {
            font: '24px monospace',
            fill: '#fff',
          },
        ).setOrigin(0.5, 0.5);
      }
    }

    this.replay = this.add.sprite(400, 500, 'replay').setScale(0.3);

    this.replay.setInteractive().on('pointerdown', () => {
      this.scene.start('Boot');
    });
  }

  async getScores() { // eslint-disable-line class-methods-use-this
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xJaaYOvOiH8wnFAVEPTP/scores/';

    const fetchData = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json',
      },
    };

    const scores = fetch(url, fetchData)
      .then((response) => response.json())
      .then((data) => data.result);
    return scores;
  }
}
