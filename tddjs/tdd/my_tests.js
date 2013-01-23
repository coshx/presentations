
test( "runs tests", function() {
  var test = 'ok(myFunction(), "MyFunction called");'
  var code = 'myFunction = function() { return true; };'

  $("#test").val(test);
  $("#code").val(code);
  $("#run").click();
  equal("Tests Passed", $("#result").text());
});
