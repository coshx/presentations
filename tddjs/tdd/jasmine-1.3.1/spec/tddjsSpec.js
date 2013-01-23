describe("tddjs", function() {
  var tests, code;

  describe("runTests", function() {
    it("runs the specified tests", function() {
      tests = "return true;"
      expect(tddjs.runTests(tests, code)).toBeTrue();
    });

    it("can reference the specified code", function() {

    });
  });
});
