function getSTEN_D(num) {
  if (num >= 8) {
    return false;
  } else {
    return true;
  }
}

function getSTEN_NPN(num) {
  if (num >= 13) {
    return 10;
  } else if (num === 12) {
    return 9;
  } else if (num === 11 || num === 10) {
    return 8;
  } else if (num === 9 || num === 8) {
    return 7;
  } else if (num === 7) {
    return 6;
  } else if (num === 6 || num === 5) {
    return 5;
  } else if (num === 4 || num === 3) {
    return 4;
  } else if (num === 2) {
    return 3;
  } else if (num === 1) {
    return 2;
  } else {
    return 1;
  }
}

export { getSTEN_D, getSTEN_NPN };