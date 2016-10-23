exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(arg) {
      return str+', '+arg;
    }
  },

  makeClosures: function(arr, fn) {
    let f = [], i=0;
    let cl = function(x) {
      return function() {return fn(x)}
    }
    for (; i < arr.length; i++) {
      f.push(cl(arr[i]));
    }
    return f;
  },

  partial: function(fn, str1, str2) {
  return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    let args = [...arguments]
    if (args.length == 1)
      return args[0];
    else {
        let i = 0, s=0;
        s = args.reduce((prevVal, elem) => prevVal + elem, 0)
       return s;
    }
  },

  callIt: function(fn) {
    let args = [...arguments]
    args.shift(); // eliminate the function arg
    fn.apply(null, args)
  },

  partialUsingArguments: function(fn) {
    let args = [...arguments]
    console.log(args)
    args.shift();
    console.log(args);
    return function() {
      let addargs = [...arguments]
      console.log(addargs);
      console.log(args);
      let m = args.concat(addargs)
      console.log(m)
      fn.apply(null, m)
    }
  },

  curryIt: function(fn) {

  }
};
