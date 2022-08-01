export const moveItem = <T>(array: T[], from: number, to: number) => {
  const arrayCopy = [...array];
  const startIndex = to < 0 ? arrayCopy.length + to : to;
  const item = arrayCopy.splice(from, 1)[0];
  arrayCopy.splice(startIndex, 0, item);
  return arrayCopy;
}
