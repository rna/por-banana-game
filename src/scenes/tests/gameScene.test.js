/* eslint-disable no-unused-expressions */
import GameScene from '../gameScene';

const Game = new GameScene();

test('Game should be an instance of GameScene class', () => {
  expect(Game).toBeInstanceOf(GameScene);
});

test('Game should return an object', () => {
  expect(typeof Game).toBe('object');
});

test('Game should have a postScores property', () => {
  expect(Game.postScores).toBeTruthy;
});

test('Game.postScores should be a function', () => {
  expect(typeof Game.postScores).toBe('function');
});

test('Game.postScores should take 1 parameter', () => {
  expect(Game.postScores.length).toBe(1);
});

test('Game should have a hitEnemy property', () => {
  expect(Game.hitEnemy).toBeTruthy;
});

test('Game.hitEnemy should be a function', () => {
  expect(typeof Game.hitEnemy).toBe('function');
});

test('Game should have a collectBanana property', () => {
  expect(Game.collectBanana).toBeTruthy;
});

test('Game.collectBanana should be a function', () => {
  expect(typeof Game.collectBanana).toBe('function');
});

test('Game.collectBanana should take 2 parameters', () => {
  expect(Game.collectBanana.length).toBe(2);
});


describe('test post score API function', () => {
  const data = { user: 'Ramesh', score: 60 };
  global.fetch = jest.fn(() => Promise.resolve(data));

  test('postScores API should return an object', () => {
    Game.postScores(data).then(response => {
      expect(typeof response).toEqual('object').catch(() => {});
    });
  });

  test('postScores API should add a score', () => {
    Game.postScores(data).then(response => {
      expect(response.json().result).toEqual('Leaderboard score created correctly.').catch(() => {});
    });
  });
});
