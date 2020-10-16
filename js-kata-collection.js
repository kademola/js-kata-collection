function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  let i = 0;
  let mul = 0;
  while (i < b) {
    mul = add(a, mul);
    i++;
  }
  return mul;
}

function power(a, b) {
  let i = 0;
  let pow = 1;
  while (i < b) {
    pow = multiply(a, pow);
    i++;
  }
  return pow;
}

function factorial(a) {
  let result = a;
  while (a > 1) {
    a--;
    result = multiply(a, result);
  }
  return result;
}

function fibonacci(a) {
  if (a == 1) return 0;

  if (a === 2) return 1;

  let f1 = 0,
    f2 = 1,
    sum,
    i = 2;

  while (i < a) {
    sum = add(f1, f2);
    f1 = f2;
    f2 = sum;
    i++;
  }
  return f2;
}
