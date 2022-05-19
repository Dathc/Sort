//факториал

const f = (n) => {
  if (n == 1) {
      return n
  }
  return n * f(n-1)
}

console.log(f(3))