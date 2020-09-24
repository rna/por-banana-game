/* eslint-disable no-unused-expressions */
import EndScene from '../endScene';

const EndGame = new EndScene();

test('EndGame should be an instance of EndScene class', () => {
  expect(EndGame).toBeInstanceOf(EndScene);
});

test('EndGame should return an object', () => {
  expect(typeof EndGame).toBe('object');
});

test('EndGame should have a getScores property', () => {
  expect(EndGame.getScores).toBeTruthy;
});

test('EndGame.getScores should be a function', () => {
  expect(typeof EndGame.getScores).toBe('function');
});

describe('test get scores API function', () => {
  global.fetch = jest.fn(() => Promise.resolve());

  test('getScores API should return an object', () => {
    EndGame.getScores().then(response => {
      expect(typeof response).toEqual('object').catch(() => {});
    });
  });

  test('getScores API should return an array', () => {
    EndGame.getScores().then(response => {
      expect(response.json().result).toEqual('array').catch(() => {});
    });
  });
});
