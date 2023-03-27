import { getRandomNumber, generateRandomNumbers, fillArrayByRanges } from './helper';

it('can generate random number', () => {  
  expect(getRandomNumber(10000, 99999)).toBeGreaterThan(10000);
});

it('can generate random numbers', () => {
  expect(generateRandomNumbers(5)).toHaveLength(5);
});

it('can fill array by ranges', () => {
  const ranges = [{start: 1, end: 3}, {start: 5, end: 7}];
  const arrs = Array<string>();
  fillArrayByRanges(ranges, arrs);
  expect(arrs).toEqual(['1', '2', '3', '5', '6', '7']);
});
