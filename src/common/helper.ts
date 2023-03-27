export const getRandomElement = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

export const generateRandomNumbers = (length: number) => {
  let result = '';
  for(let i = 0; i < length; i++) {
    result += getRandomNumber(0, 9);
  }
  return result;
}

export  interface Range {
  start: number;
  end: number;
}

export const fillArrayByRanges = (ranges: Range[], arrs: string[]) => {
  for(let i=0; i<ranges.length; i++) {
    const range = ranges[i];
    for(let j=range.start; j<=range.end; j++) {
      arrs.push(j.toString());
    }
  }
}
