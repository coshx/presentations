var tddjs = {};
tddjs.runTests = function(tests, code) {
  eval(code);
  return eval(tests);
};
