function receivesAFunction(callback) {
    console.log(callback());
  }
  receivesAFunction(function () { return "receives a function and calls it"});
  
  const returnsANamedFunction = function() {
    return function foo() {
    };
    }

  function returnsAnAnonymousFunction() {
    
    return function() {
    };
  }