function getAdd(a, b) {
  return a + b;
}

function getMultiply(a, b) {
  let x = 0;
  let mul = 0;
  while (x < b) {
    mul = getAdd(a, mul);
    x++;
  }
  return mul;
}

function finPower(a, b) {
  let y = 0;
  let pow = 1;
  while (y < b) {
    pow = getMultiply(a, pow);
    y++;
  }
  return pow;
}

function findFactorial(a) {
  let result = a;
  while (a > 1) {
    a--;
    result = getMultiply(a, result);
  }
  return result;
}

function findFibonacci(a) {
  if (a == 1) return 0;

  if (a === 2) return 1;

  let f1 = 0,
    f2 = 1,
    sum,
    z = 2;

  while (z < a) {
    sum = getAdd(f1, f2);
    f1 = f2;
    f2 = sum;
    z++;
  }
  return f2;
}
