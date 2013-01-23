var TddJs = {};
TddJs.runTests = function(tests, code) {
  eval(code);
  return eval(tests);
}

$(function() {
  $("#run").on("click", function() { TddJs.runTests() });
});

// var tddjs = {};
// tddjs.runTests = function(tests, code) {
//   eval(code);
//   return eval(tests);
// };

// $(function() {
//   $("#run").on("click", tddjs.runTests($("#tests").val(), $("#code").val()));
// });