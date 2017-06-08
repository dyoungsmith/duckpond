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
  // if (dir !== 'P' || dir !== 'S') return;  // could test for F here!!
  // dir === 'S'
  //   ? currIdx = (currIdx + 1) % len;
  //   : currIdx = ((currIdx + len) - 1) % len;

  return currIdx;
}

module.exports = modulo;
