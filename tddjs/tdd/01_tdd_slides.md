<!SLIDE subsection>
# Jasmine TDD - Setup

 * https://github.com/pivotal/jasmine/downloads
 * Edit SpecRunner.html


<!SLIDE code smaller small-hrefs>
# QUnit TDD - Setup

    @@@ html
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>BDD in QUnit</title>
        <link rel="stylesheet" 
              href="http://jquery.github.com/qunit/qunit/qunit.css">
        <script src="http://code.jquery.com/jquery-1.9.0.js"></script>
      </head>
      <body>
        <div id="qunit"></div>
        <div id="qunit-fixture">
        </div>
        <script src="http://jquery.github.com/qunit/qunit/qunit.js"></script>
        <script src="my_tests.js"></script>
      </body>
    </html>

<!SLIDE code smaller>
# QUnit Test

    @@@ javascript
    test( "runs tests", function() {
      var test = 'return myFunction();'
      var code = 'myFunction = function() { return 5; };'
      equal(5, runTest(test, code));
    });

<!SLIDE subsection>
# QUnit Test Result
