exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  
  indexOf: function(arr, item) {
    for (let i=0; i < arr.length; i++) {
      if (arr[i] === item) return i;
    }
    return -1;
  },

  sum: function(arr) {
    let s=0;
    s = arr.reduce((prevVal, elem) => prevVal + elem, 0)
       return s;
  },
  remove: function(arr, item) {
     let r = arr.filter(function(value, index, arr)  { 
                          if (arr[index] != item) {
                            return true; }
                          else {
                            return false;}});
      return r;
  },

  removeWithoutCopy: function(arr, item) {
    let i=0;
     for (i=arr.length; i > 0; i--) {
          if (arr[i] === item) 
            arr.splice(i,1)
     }
     return arr;
  },

  append: function(arr, item) {
    arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.splice(arr.length-1, 1);
      return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    return arr.filter(function(b) {
        return item == b;
      }).length;
  },

  duplicates: function(arr) {
    var dups = [];
      for (var i = 0; i < arr.length; i++) {
          var current = arr[i];
          if (arr.indexOf(current, i+1) > 0) 
              if (dups.indexOf(current) < 0)
                dups.push(current);
      }
      return dups;
  },

  square: function(arr) {
  let square = arr.map(num => num * num);
       return square
  },

  findAllOccurrences: function(arr, target) {
     var occurences=[];
       for (var i=0; i < arr.length; i++) {
         var x = arr.indexOf(target, i)
         if (x != -1) {
          if (occurences.indexOf(x) == -1)
            occurences.push(x);   
         }
         
       }
       return occurences
     }

  };

