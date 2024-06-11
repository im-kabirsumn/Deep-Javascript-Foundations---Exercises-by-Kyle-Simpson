function twoNum(a, b) {
  let isNumA = isNum(a);
  let isNumB = isNum(b);

  function isNum(x) {
    if (typeof x === "string" && Number(x) !== 0) {
      return Number(x);
    } else if (typeof x === "number") {
      return x;
    } else {
      return false;
    }
  }

  return Number.isInteger(isNumA) && Number.isInteger(isNumB) && isNumA <= isNumB;
}

