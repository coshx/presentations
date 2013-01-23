<!SLIDE code smaller small-hrefs subsection>
# QUnit TDD - Setup

    @@@ html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>TDD in QUnit</title>
        <link rel="stylesheet" 
              href="http://jquery.github.com/qunit/qunit/qunit.css">
        <script src="http://code.jquery.com/jquery-1.9.0.js"></script>
      </head>
      <body>
        <div id="qunit"></div>
        <div id="qunit-fixture"></div>
        <script src="http://jquery.github.com/qunit/qunit/qunit.js"></script>
        <script src="tddjs_qunit_tests.js"></script>
      </body>
    </html>

<!SLIDE code smaller subsection>
# QUnit Test

    @@@ javascript
    module("tddjs.runTests");

    test("runs tests", function() {
      var test = '5;';
      var code = '';
      var actual = tddjs.runTests(test, code);
      var expected = 5;
      var optionalMsg = "expected output to be 5";
      equal(actual, expected, optionalMsg);
    });

    test("tests can reference code", function() {
      var test = 'myFunction();';
      var code = 'function myFunction() { return 42; };';
      equal(tddjs.runTests(test, code), 42);
    });


<!SLIDE subsection>
# QUnit Test Result
![qunit failing because no tddjs defined](../img/qunit_fail_no_tddjs.png)

<!SLIDE subsection code smaller>
# Make the Tests Pass

Reference our library code from qunit html:

    @@@ html
    <script src="tddjs.js"></script>

In the library code (tddjs.js):

    @@@ javascript
    var tddjs = {};
    tddjs.runTests = function(tests, code) {
      eval(code);
      return eval(tests);
    };


<!SLIDE subsection>
# QUnit Test Result
![qunit passing with eval in tddjs](../img/qunit_pass.png)

<!SLIDE subsection bullets>
# Iterate

* **Refine** Tests
* **Refactor** Code
* **Repeat** Until Satisfied


