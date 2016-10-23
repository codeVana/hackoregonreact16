exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    let a = [];

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        a.push(prop + ': ' + obj[prop]);
      }
    }

    return a;
  }
};
