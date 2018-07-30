const functionsChaining = (start, ...funcs) =>
  funcs.reduce((acc, fn) => fn(acc), start);

export default functionsChaining;
