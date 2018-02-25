console.log("Got here!");
fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        // If so, iterate over it using for loop and a callback with arguments (element, index, collection).
        for (i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
      //   // If it's an object, iterate over it using a loop and a callback of (value, key, collection)
        for (const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      newArray = []
      if (Array.isArray(collection)) {
        // If so, iterate over it using for loop and a callback with arguments (element, index, collection).
        for (i = 0; i < collection.length; i++) {
          newArray.push(callback(collection[i], i, collection))
        }
      } else {
      //   // If it's an object, iterate over it using a loop and a callback of (value, key, collection)
        for (const key in collection) {
          newArray.push(callback(collection[key], key, collection))
        }
      }
      return newArray;

    },

    reduce: function(collection, callback, initialValue) {
      total = initialValue;
      // iterate through array
        for (i = 0; i < collection.length; i++ ) {
        // for each iteration, set total to new value it gets back from callback
          total = callback(total, collection[i], collection)
      }
      return total
    },

    find: function(collection, callback) {
      for (i = 0; i < collection.length; i++ ) {
        if (callback(collection[i])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, callback) {
      newArray = [];

      for (i = 0; i < collection.length; i++ ) {
        if (callback(collection[i])) {
          newArray.push(collection[i]);
        }
      };
      return newArray;
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      n = n || 1;
      if (n > 1) {
        return array.slice(0, n)
      } else {
        return array.slice(0, n)[0]
      }
    },

    last: function(array, n) {
      n = n || 1;
      if (n > 1) {
        return array.slice(-n)
      } else {
        return array.slice(-n)[0]
      }
    },

    compact: function(collection) {
      newArray = [];

      for (i = 0; i < collection.length; i++ ) {
        if (collection[i]) {
          newArray.push(collection[i]);
        }
      };
      return newArray;
    },

    sortBy: function(array, callback) {
      resultArray = [];

      for (i = 0; i < array.length; i++ ) {
        resultArray.push(callback(array[i]))
      }

      // now sort resultArray using bubblesort algorithm
      for (let i = (resultArray.length - 1); i > 0; --i ) {
        for ( let j = 0; j < i; ++j ) {
          if ((resultArray[j] - resultArray[j+1]) > 0) {
            // swap
            const temp = resultArray[j];
            resultArray[j] = resultArray[j+1];
            resultArray[j+1] = temp;
          }
        }
      }
      return resultArray;
    },
        // [1, [2], [3, [[4]]]]  ==> [1, 2, 3, [[4]]]
    flatten: function(array, shallow) {
      if (shallow){
        newArray = [];
        for(i=0;i < array.length; i++) {
          newArray = newArray.concat(array[i]);
        }
        return newArray;
      }
      if (Array.isArray(array)) {
        if (array.length === 1) {
          return this.flatten(array[0], shallow)
        } else {
          return this.flatten(array[0], shallow).concat(this.flatten(array.slice(1), shallow))
        }
      } else {
        return [array]
      }
    },

    uniq: function(array, isSorted, iteratee) {
      uniq = [];
      if (iteratee) {
        values = [];
        let isThere;
        for (var i = 0; i < array.length; i++) {
          there = values.includes(iteratee(array[i]))
          if (!there) {
            uniq.push(array[i]);
            values.push(iteratee(array[i]));
          }
        }
      } else {
        for (var i = 0; i < array.length; i++) {
          if (array.indexOf(array[i]) === i) {
            uniq.push(array[i]);
          }
        }
      }
      return uniq;
    },

    keys: function(obj) {
      let keys = [];
      for (var key in obj) {
          keys.push(key);
      }
      return keys;
    },

    values: function(obj) {
      let values = [];
      for (var key in obj) {
          values.push(obj[key]);
      }
      return values;
    },

    functions: function() {

    },

  }
})()

fi.libraryMethod()
