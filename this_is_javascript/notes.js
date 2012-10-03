var objectLiteral = {
  functionLiteral: function(arg1) {
    console.log(this);
    console.log(arg1);
    console.log(arguments);
    console.log(this.prototype);
  }
}

var FunctionLiteral = function() {
  console.log("constructor run.")
}

FunctionLiteral.prototype.addedMethod = function() { 
  console.log("called method added to constructor"); 
}
myFunctionLiteral = new FunctionLiteral();
//myFunctionLiteral.__proto__.constructor == FunctionLiteral
myFunctionLiteral.addedMethod();
// >> called method added to constructor


// Singleton Pattern
var global = this;
var count = 0;

function Singleton(count) {
  if (this == global) {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(++count);
    }
    return Singleton.instance
  } else {
    this.count = count;
  }
}

function badDesign(n)
{
  if (n === 0)
  {
    return n;
  }
  else
  {
    return
    {
      msg: "FAIL!"
    }
  }
}

function wrapper(func) {
  var context = {};

  return {
    setContext: function(ctx) {
      context = ctx;
    },
    getContext: function() {
      return context;
    },
    apply: function(args) {
      return func(context, args);
    }
  };
};
var incr = wrapper(function(context, x) { return context + x + 1; });
incr.setContext(0);
incr.apply(5); // 6
incr.setContext(1);
incr.apply(5); // 7

function withContext(obj) {
  var context = obj;

  return {
    setContext: function(ctx) {
      context = ctx;
    },
    getContext: function(ctx) {
      return context;
    },
    // currently just for argumentless functions
    apply: function(func) {
      return func(context);
    }
  };
};

var phone = withContext({number : '555-1212'});
function dial(context) { console.log("Hello, this is " + context.number); }
phone.apply(dial);

