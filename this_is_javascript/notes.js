// object literals
var someGlobalObject = {
  anArray: [1,2,3],
  aNumber: 3,
  aFunction: function(x) { x + 1 },
  aNestedObject: { x: 1, y: 2}
};

var myObject = {
  value: 0,
  incr: function() {
    this.value += 1;
    return this.value;
  }
};

// prototypal inheritance
var ObjectCreator = {
  dispatch: function(obj, name, args) {
    if (obj[name]) {
      return obj[name](args);
    } else if (obj.parent) {
      return ObjectCreator.dispatch(obj.parent, name, args);
    } else {
      return null;
    }
  },
  create: function() {
    var obj = {};
    obj.parent = ObjectCreator;
    obj.dispatch = function(name, args) { return ObjectCreator.dispatch(obj, name, args); };
    return obj;
  }
};

var myObj = ObjectCreator.create();
var otherObj = ObjectCreator.create();
otherObj.foo = function() { return "hello!"; };
myObj.parent = otherObj;

ObjectCreator.foo = function() { return "foo"; }
console.log(myObj.dispatch("foo"));
