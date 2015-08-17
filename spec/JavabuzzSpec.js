describe('Javabuzz',function() {
  beforeEach(function(){
    javabuzz = new JavaBuzz
  });

  var javabuzz;

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleBy(3,3)).toBe(true);
    });

    it(' not divisible by 3', function() {
      expect(javabuzz.isDivisibleBy(1,3)).toBe(false);
    })

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleBy(5,5)).toBe(true);
    })

    it('not divisible by 5', function() {
      expect(javabuzz.isDivisibleBy(1,5)).toBe(false);
    })

    it('divisible by 15', function() {
      expect(javabuzz.isDivisibleBy(15,15)).toBe(true);
    })

    it('not divisible by 15', function() {
      expect(javabuzz.isDivisibleBy(1,15)).toBe(false);
    })

  });

});
