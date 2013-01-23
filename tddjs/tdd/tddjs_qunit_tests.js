module("tddjs.runTests");

test("runs tests", function() {
  var test = '5;';
  var code = '';
  equal(tddjs.runTests(test, code), 5);
});

test("tests can reference code", function() {
  var test = 'myFunction();';
  var code = 'function myFunction() { return 42; };';
  equal(tddjs.runTests(test, code), 42);
});
