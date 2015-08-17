var JavaBuzz = function(){};

JavaBuzz.prototype._isDivisibleBy = function (number, divisor) {
  return (number % divisor === 0);
};

JavaBuzz.prototype.isDivisibleByThree = function (number, divisor) {
  return (this._isDivisibleBy(number, 3));
};

JavaBuzz.prototype.isDivisibleByFive = function (number) {
  return (this._isDivisibleBy(number, 5));
};

JavaBuzz.prototype.isDivisibleByFifteen = function (number) {
  return this._isDivisibleBy(number, 15);
};

JavaBuzz.prototype.says = function (number) {
  if (this.isDivisibleByFifteen(number)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleByThree(number)) {
    return "Java";
  }
  if (this.isDivisibleByFive(number)) {
    return "Buzz";
  }
};
