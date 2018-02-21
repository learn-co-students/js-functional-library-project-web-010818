fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
        if (Array.isArray(collection)){
          for(let i = 0; i < collection.length; i++){
            iteratee(collection[i], i, collection);
          }
        }else if (typeof collection === 'object'){
          for (key in collection){
            iteratee(collection[key], key, collection)
          }
        }
        return collection;
    },

    map: function(collection, iteratee) {
      let newArray = [];
      if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
          newArray.push(iteratee(collection[i], i, collection))
        }
      } else if(typeof collection === 'object'){
        let newObject = {};
        for (key in collection){
          newArray.push(iteratee(collection[key], key, collection))
        }
      }
      return newArray;
    },

    reduce: function(collection, iteratee, acc) {
      let result = acc

      for (let i = 0; i < collection.length; i++){
        result = iteratee(result, collection[i], collection)
      }
      return result;

    },

    find: function(collection, predicate) {

      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          return true
        }
      }
      return false
    },

    filter: function(collection, predicate){
      let newArray = []
      for (let i = 0; i < collection.length; i++){
        if (predicate(collection[i])){
          newArray.push(collection[i]);
        }
      }
      return newArray;
    },

    size: function(collection){
      let count = 0

      for (key in collection){
        count += 1
      }

      return count

    },

    first: function(array, n){
      if (!n){
        return array.slice(0,1)[0];
      } else if (n){
        return array.slice(0,n);
      }
    },

    last: function(array, n){
      if (!n){
        return array.slice(-1)[0];
      } else if (n){
        return array.slice(n * -1);
      }
    },

    compact: function(array){
      let newArray = []

      for(let i = 0; i < array.length; i++){
        if (array[i]){
          newArray.push(array[i])
        }
      }

      return newArray

    },

    sortBy: function(array, iteratee){
      let newArray = [...array]
      newArray.sort(function(a,b){
        return iteratee(a)-iteratee(b)
      });

      return newArray
    },

    flatten: function(array, shallow){
      let newArray = []
      if(!shallow){
          function flatten(array){
            for (let i = 0; i < array.length; i ++) {
              if (Array.isArray(array[i])) {
                flatten(array[i])
              } else{
                newArray.push(array[i])
              }
            }
          }
          flatten(array);
      } else if (shallow === true){
        for (const key in array) {
          if (typeof array[key] === 'object') {
            for (const nestedKey in array[key]) {
              newArray.push(array[key][nestedKey]);
            }
          } else {
            newArray.push(array[key]);
          }
  }
      }

      return newArray

    },

    uniq: function(array, isSorted, iteratee){
      let newArray = [];


      for (let i = 0; i < array.length; i++){
        if(!newArray.includes(array[i])) {
          newArray.push(array[i]);
        }
      }

      if (iteratee){
        let result = [];
        let newerArray = [];
        for (let i = 0; i < newArray.length; i++){
          if(!result.includes(iteratee(newArray[i]))){
            result.push(iteratee(newArray[i]));
            newerArray.push(newArray[i]);
          }
        }
        return newerArray;

      }

      return newArray;

    },

    keys: function(object){
      let newArray = []

      for (key in object){
        newArray.push(key)
      }

      return newArray;

    },

    values: function(object){
      let newArray = []

      for (key in object){
        newArray.push(object[key])
      }

      return newArray;

    },

    functions: function(object){
      let newArray = []

      for (key in object){
        if (typeof object[key] === "function") {
          newArray.push(key)
        }

      }

      return newArray.sort();
    }




  };
})();

fi.libraryMethod()
