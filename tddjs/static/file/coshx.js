var coshx = {
  onSlideShow: function(selector, fcn) {
    $(document).on('showoff:show', selector, function(event) {
      setTimeout(function() {
        fcn(event);
      }, 100);
    });
  },

  enableSmallHref: function() {
    $('.sh_string:contains("http")').addClass('small-href');
  },

  fixKeyDownForTextAreas: function() {
    var keyDown = document.onkeydown;
    document.onkeydown = function(event) {
      if ($("textarea").is(":focus")) {
        return true;
      } else {
        return keyDown(event);
      }
    };
  }
};

coshx.onSlideShow('.small-hrefs', coshx.enableSmallHref);
coshx.onSlideShow('.accepts-input', coshx.fixKeyDownForTextAreas);
