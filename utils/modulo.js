function modulo(currIdx, len, dir) {
  switch (dir) {
    case 'S':   // rightward
      currIdx = (currIdx + 1) % len;
      break;
    case 'P':   // leftward
      currIdx = ((currIdx + len) - 1) % len;
      break;
    default:
      console.log('Invalid direction!');
  }
  return currIdx;
}

module.exports = modulo;
