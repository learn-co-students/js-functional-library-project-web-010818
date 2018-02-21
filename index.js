fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          iteratee(collection[i], i, collection);
        }
      } else if (typeof collection === 'object') {
        for (key in collection) {
          iteratee(collection[key], key, collection);
        }
      }
      return collection;
    },

    map: function(collection, iteratee) {
      const newCollection = [];
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(iteratee(collection[i], i, collection))
        }
      } else if (typeof collection === 'object') {
        for (key in collection) {
          newCollection.push(iteratee(collection[key], key, collection));
        }
      }
      return newCollection;
    },

    reduce: function(collection, iteratee, acc) {
      let final = acc;
      for (let i = 0; i < collection.length; i++) {
        final = iteratee(final, collection[i], collection)
      }
      return final;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      const newCollection = [];
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function(collection) {
      let count = 0;
      for (key in collection) {
        count += 1;
      }
      return count;
    },

    first: function(array, n) {
      return (n ? array.slice(0, n) : array.slice(0, 1)[0])
    },

    last: function(array, n) {
      return (n ? array.slice(n * -1) : array.slice(-1)[0])
    },

    compact: function(array) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    // I want you to write a different sort and use a faster sort
    // how do you prove it???? how can i write a function that could prove speed

    sortBy: function(array, iteratee) {
      const newArray = array.slice();
      // use a better sort -> Merge Sort
      for (let i = 0; i < newArray.length; i++) {
        for (let j = 0; j < newArray.length; j++) {
          if (iteratee(newArray[j]) < iteratee(newArray[j-1])) {
            temp = newArray[j];
            newArray[j] = newArray[j-1];
            newArray[j-1] = temp;
          }
        }
      }
      // newArray.sort(function (a, b) {
      //   return iteratee(a) - iteratee(b);
      // });
      return newArray;
    },

    flatten: function(array, shallow) {
      const newArray = [];
      if (shallow) {
        for (let i = 0; i < array.length; i++) {
          if (Array.isArray(array[i])) {  //array[i] is another array
            for (let j = 0; j < array[i].length; j++) {
              newArray.push(array[i][j]);
            }
          } else {  //array[i] is a number
            newArray.push(array[i]);
          }
        }
      } else {
        function deepFlatten (array) {
          for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
              deepFlatten(array[i]);
            } else {
              newArray.push(array[i]);
            }
          }
        }
        deepFlatten(array);
      }
      return newArray;
    },

    uniq: function (array, isSorted, iteratee) {
      const newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!newArray.includes(array[i])) {
          newArray.push(array[i]);
        }
      }

      if (iteratee) {
        const iterateeResults = [];
        const newerArray =[];
        for (let j = 0; j < newArray.length; j++) {
          if (!iterateeResults.includes(iteratee(newArray[j]))) {
            newerArray.push(newArray[j]);
            iterateeResults.push(iteratee(newArray[j]));
          }
        }
        return newerArray;
      }
      return newArray;
    },

    keys: function (obj) {
      const keysArr = [];
      for (key in obj) {
        keysArr.push(key);
      }
      return keysArr;
    },

    values: function (obj) {
      const valsArr = [];
      for (key in obj) {
        valsArr.push(obj[key]);
      }
      return valsArr;
    },

    functions: function(obj) {
      const funcArr = [];
      for (key in obj) {
        if (typeof obj[key] === 'function') {
          funcArr.push(key);
        }
      }
      return funcArr.sort();
    }
  }
})()

fi.libraryMethod()
