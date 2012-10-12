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
    var height = '350px';
    this.jsConsole.setSize(width, height);
    this._addSnippetHandler();
  },

  onConsoleUpdate: function() {
    if ( typeof this.jsConsole === "undefined" ) {
      console.log('nothing is defined');
      return;
    }

    var wrapperElem = $(this.jsConsole.getWrapperElement());

    try {
      window.eval(this.jsConsole.getValue());
      wrapperElem.removeClass('error');
      wrapperElem.addClass('success');
    } catch (err) {
      wrapperElem.removeClass('success');
      wrapperElem.addClass('error');
      $("#results").text('');
    }

    return true;
  },

  snippets: {},
  addSnippet: function(name, code) {
    snippets[name] = new js101.Snippet(name, code);
  },
  showSnippet: function(name) {
    snippets[name].show();
  },

  _addSnippetHandler: function() {
    $("body").on('click', "#snippets li", function() {
      js101.showSnippet($(this).data('snippet'));
    });
  }
};

js101.Snippet = function(name, code) {
  this.name = name;
  this.code = code;
};
js101.Snippet.prototype.show = function() {
  js101.jsConsole.setValue(js101.jsConsole.getValue() + "\n" + this.code);
};

js101.setupSnippets = function() {
  /* debug */
  js101.addSnippet('debug', 

function debug(msg) {
  $("#results").show().text(msg);
  console.log(msg)
}
  );


  /* display an awesome book */
  js101.addSnippet('showDoug',

function showDoug() {
  if ($("#thanks").length > 0) {
    $("#thanks").show();
  } else {
    var thanksDiv = $("<div/>", {id: "thanks"}).appendTo("body");
    var img = $("<img/>", {src: "img/crockford.jpg"}).appendTo(thanksDiv);
    thanksDiv.on("click", function() { $(this).hide(); });
  }
}
  );

  js101.addSnippet('types', 
function person() {
  return {
    github: "btaitelb",
    age: 31,
    dob: new Date("5/20/1981"),
    sayHi: function() { return "Howdy!"; },
    drinksCoffee: true,
    kids: [],
    favoriteColor: null
  };

}
  );


    js101.addSnippet('prototypes', '\
function Mammal() {\n\
  this.warmBlooded = true;\n\
}\n\
function Person() { \n\
  this.likes = ["javascript", "code"]; \n\
  this.site = "http://github.com"; \n\
} \n\
\n\
var ben = new Person(); \n\
ben.likes.push("this"); \n\
\n\
Person.prototype.showLikes = function() { \n\
  debug(this.likes.join(" && ")); \n\
} \n\
\n\
//ben.showLikes(); \n\
Person.prototype = new Mammal();\n\
//debug(ben.warmBlooded); \n\
//ben = new Person(); \n\
//debug(ben.warmBlooded); \n\
'
  );


    js101.addSnippet('this_constructor', 
function Animal(name) {
  this.name = name;
  this.cuteness = 0.5;
}
  );

    js101.addSnippet('this_global', 'TODO');

    js101.addSnippet('this_method', 'TODO');

    js101.addSnippet('this_call', 'TODO');

    js101.addSnippet('this_bind', 'TODO');

};

$(function() {
  js101.init();
  js101.setupSnippets();
});