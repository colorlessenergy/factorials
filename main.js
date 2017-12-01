function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

// case if 'n' = 5;
// factorial(5 - 1)
// 5 * factorial (4)
// factorial(4-1)
// 5*(4 * factorial (3))
// factorial(3 - 1);
// 5*(4*(3 * factorial(2)))
// factorial(2- 1)
// 5*(4*(3*(2 * factorial (1)))
// factorial (1-1)
// 5 * (4*(4*(2*(1* factorial (0)))))

// after 'n' === 0
// the final call of factorial will be
// 5 * (4*(4*(2*(1* factorial (0)))))
// without the parenthese it looks like 5 * 4 * 3 * 2 * 1 * 1
// which translate to 120


factorial(5);
