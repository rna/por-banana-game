import BootScene from '../bootScene';

const Boot = new BootScene();

test('Boot should be an instance of WorldScene class', () => {
  expect(Boot).toBeInstanceOf(BootScene);
});

test('Boot returns an object', () => {
  expect(typeof Boot).toBe('object');
});