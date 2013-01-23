<!SLIDE code smaller small-hrefs subsection>
# QUnit TDD - Setup

    @@@ html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>TDD in QUnit</title>
        <link rel="stylesheet" 
              href="http://code.jquery.com/qunit/qunit-1.10.0.css">
        <script src="http://code.jquery.com/jquery-1.9.0.js"></script>
      </head>
      <body>
        <div id="qunit"></div>
        <div id="qunit-fixture"></div>
        <script src="http://code.jquery.com/qunit/qunit-1.10.0.js"></script>
        <script src="tddjs_qunit_tests.js"></script>
      </body>
    </html>

<!SLIDE code smaller subsection>
# QUnit Unit Test

    @@@ javascript
    module("TddJs.runTests");

    test("runs tests", function() {
      var test = '5;';
      var code = '';
      var actual = TddJs.runTests(test, code);
      var expected = 5;
      var optionalMsg = "expected output to be 5";
      equal(actual, expected, optionalMsg);
    });

<!SLIDE subsection>
# QUnit Unit Test Result
![qunit failing because no TddJs defined](../img/tdd_qunit_01no_tddjs.png)

<!SLIDE subsection code smaller>
# Make It Pass - Create a Library

## Add Library to HTML:

    @@@ html
    <script src="src/tddjs.js"></script>

## Start Simple:

    @@@ javascript
    var TddJs = {};
    TddJs.runTests = function(tests, code) {
      return eval(tests);
    }

<!SLIDE subsection code smaller red>
# Make a Failing Test

    @@@ javascript
    module("TddJs.runTests");

    test("can reference code from test", function() {
      var test = 'myFunction();';
      var code = 'myFunction = function() { return 42; }';
      var actual = TddJs.runTests(test, code);
      var expected = 42;
      equal(actual, expected);
    });

<!SLIDE subsection>
# QUnit Unit Test Result
![qunit failing because code not executed](../img/tdd_qunit_03_myfunction_not_defined.png)

<!SLIDE subsection code smaller>
# Make It Pass

    @@@ javascript
    var TddJs = {};
    TddJs.runTests = function(tests, code) {
      eval(code);
      return eval(tests);
    }

<!SLIDE subsection code smaller>
# What's Missing?

    @@@ javascript
    asyncTest("executed when run clicked", function() {
      expect(1);
      var mockRunTests = function() {
        ok(true);
        start();
      };
      TddJs.runTests = mockRunTests;
      $("#run").click();
    });