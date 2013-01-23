describe("TddJs", function() {
  describe("Click Run", function() {
    it("calls TddJs.runTests", function() {
      var callback;

      runs(function() {
        callback = sinon.spy();
        TddJs.runTests = callback;
        $("#run").click();
        expect(callback.getCall(0).args[0]).toEqual('');
      });
      waitsFor(function() {
        return callback.called;
      }, "callback to be called", 3000);
      runs(function() {
        expect(callback.called).toBeTruthy();
      });

    });

  });
});
