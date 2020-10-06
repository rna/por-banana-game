import TitleScene from '../titleScene';

const Title = new TitleScene();

test('Title should be an instance of TitleScene class', () => {
  expect(Title).toBeInstanceOf(TitleScene);
});

test('Title returns an object', () => {
  expect(typeof Title).toBe('object');
});