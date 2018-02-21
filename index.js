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
          return collection[i]
        }
      }
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
      return array.slice(0, n)
    },

    last: function(array, n) {
      n = n || 1;
      return array.slice(-n)
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
      resultArray = []
      let value;

      for (i = 0; i < array.length; i++ ) {
        value = (callback(array[i]))
        if (i === 0) {
          resultArray.push(array[i])
        } else {
          // iterate through resultArray until you find something bigger than yourself, insert before it
          for (j = 0; j < resultArray.length; j++) {
            if (typeof value === "string") {
              if ((callback(resultArray[j]).localeCompare(value)) >= 0) {
                resultArray.splice(j, 0, array[i])
                break;
              } else if (j === resultArray.length - 1) {
                resultArray.push(array[i])
                break;
              }
            } else {
                if (value <= callback(resultArray[j])) {
                  resultArray.splice(j, 0, array[i])
                  break;
                } else if (j === resultArray.length - 1) {
                  resultArray.push(array[i])
                  break;
                }
              }
            }
          }
        }
        return resultArray;
      },

    functions: function() {

    },

  }
})()

fi.libraryMethod()
