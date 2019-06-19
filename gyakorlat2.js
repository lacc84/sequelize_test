
const haromszogkerulet = (a, b, c) => {
  return (a + b + c);
};

const haromszogterulet = (a, ma) => {
  return (a * ma) / 2;
};

const korkerulet = (r) => {
  return (2 * 3.14 * r);
};

const korterulet = (r) => {
  return 3.14 * r * r;
};

const teglalapkerulet = (a, b) => {
  return 2 * (a + b);
};

const teglalapterulet = (a, b) => {
  return (a * b);
};

const teglatestfelszin = (a, b, c) => {
  return 2 * (a * b + a * c + b * c);
};

const teglatestterulet = (a, b, c) => {
  return (a * b * c);
};

const gombfelszin = (r) => {
  return (4 / 3 * (3.14 * r));
};

const gombterulet = (r) => {
  return (4 * 3.14 * r * r);
};

const calc = (callb, ...params) => {
  return callb(...params);
};
console.log(calc(gombfelszin, 10));
