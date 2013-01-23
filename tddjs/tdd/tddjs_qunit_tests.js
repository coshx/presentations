module("TddJs.runTests");

// test("runs tests", function() {
//   var test = '5;';
//   var code = '';
//   var actual = TddJs.runTests(test, code);
//   var expected = 5;
//   var optionalMsg = "expected output to be 5";
//   equal(actual, expected, optionalMsg);
// });

test("can reference code from test", function() {
  var test = 'myFunction();';
  var code = 'myFunction = function() { return 42; }';
  var actual = TddJs.runTests(test, code);
  var expected = 42;
  equal(actual, expected);
});

// asyncTest("is executed when run button is clicked", function() {
//   expect(1);
//   var mockRunTests = function() {
//     start();
//     ok(true);
//   };
//   TddJs.runTests = mockRunTests;
//   $("#run").click();
// });

// test("tests can reference code", function() {
//   var test = 'myFunction();';
//   var code = 'function myFunction() { return 42; };';
//   equal(TddJs.runTests(test, code), 42);
// });

// module("TddJs.integration", {
//   setup: function() {
//     var $fixture = $("#fixture");
//     $fixture.append('<button id="run">Run</button>');
//     $fixture.append('<textarea id="test"></textarea>');
//     $fixture.append('<textarea id="code"></textarea>');
//     $fixture.append('<div id="result"></div>');
//     $("#run").on("click", TddJs.runTests);
//   }
// });

// module("TddJs.integration", {
//   setup: function() {
//     var $fixture = $("#qunit-fixture");
//     $fixture.append('<button id="run">Run</button>');
//     $("#run").on("click", function() {
//       $fixture.append('<div id="result">Passed</div>');
//     });
//   }
// });

// test("clicking 'Run' runs the tests", function() {
//   equal($("#result").text(), '', "expect no results initially");
//   var test = 'equal(myFunction(), 42);';
//   var code = 'myFunction = function() { return 42; };';
//   $("#test").val(test);
//   $("#code").val(code);
//   $("#run").click();
//   equal($("#result").text(), 'Passed');
// });

