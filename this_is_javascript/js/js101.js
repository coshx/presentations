var js101 = {
  init: function() {
    that = this;
    this.jsConsole = CodeMirror.fromTextArea($('#jsTextArea')[0],
      {
        mode: "javascript",
        theme: "lesser-dark",
        indentUnit: 2,
        tabSize: 2,
        lineNumbers: true,
        onUpdate: function() { that.onConsoleUpdate(); }
      });

    var width = '100%';
    var height = $(window).height() * 0.8 + 'px';
    this.jsConsole.setSize(width, height);
  },

  onConsoleUpdate: function() {
    if ( typeof this.jsConsole === "undefined" ) {
      console.log('nothing is defined');
      return;
    }

    var wrapperElem = $(this.jsConsole.getWrapperElement());

    try {
      eval(this.jsConsole.getValue());
      wrapperElem.removeClass('error');
      wrapperElem.addClass('success');
    } catch (err) {
      wrapperElem.removeClass('success');
      wrapperElem.addClass('error');
    }

    return true;
  }
};

$(function() {
  js101.init();
});