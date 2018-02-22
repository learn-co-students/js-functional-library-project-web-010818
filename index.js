fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === 'object'){
        for (let key in collection){
          callback(collection[key]);
        }
      } else {
        for (let i = 0; i < collection.length; i++){
          callback(collection[i]);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = [];
      if (typeof collection == 'object'){
        for (let key in collection){
          let value = collection[key];
          newArray.push(callback(value));
        }
      } else {
        for (let i = 0; i < collection.length; i++){
          newArray.push(callback(collection[i]))
        }
      }
      return newArray;
    },

    reduce: function(array, reducer, acc) {
      // reducer = function(acc, val, collection){return acc + num}
      let sum = acc;
      for (let i = 0; i < array.length; i++){
        sum = reducer(sum, array[i], array);
      }
      return sum;
    },

    functions: function() {

    },

    find: function(array, pred) {
      for (let i = 0; i < array.length; i++){
        if (pred(array[i])){
          return true;
        }
      }
      return false;
    },

    filter: function(array, callback) {
      let arr = [];

      for (let i = 0; i < array.length; i++) {
        if (callback(array[i])){
          arr.push(array[i])
        }
      }
      return arr;
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length;
      } else {
        let counter = 0;
        for (let key in collection){
          counter += 1;
        }
        return counter;
      }
    },

    first: function(array, n = 1){
      if (n === 1){
        return array[0];
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n = 1){
      if (n === 1){
        return array.slice(n * -1)[0];
      } else {
        return array.slice(n * -1);
      }
    },

    compact: function(array){
      let newArray = [];

      for(let i = 0; i < array.length; i++){
        if (array[i]){
          newArray.push(array[i])
        }
      }
      return newArray;
    },

    sortBy: function(array, sorter) {
      let newArray = array.slice();
      newArray = newArray.sort(function(a, b){
        if (sorter(a) < sorter(b)){
          return -1;
        } else if (sorter(a) > sorter(b)) {
          return 1;
        } else {
          return 0;
        }
      })
      return newArray;
    },

    flatten: function(array, shallow = false){
      let flatArray = [];
      if (shallow){
        for (let i = 0; i < array.length; i++){
          if (Array.isArray(array[i])){
            for (let j = 0; j < array[i].length; j++){
              flatArray.push(array[i][j])
            }
          } else{
            flatArray.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++){
          if (Array.isArray(array[i])){
            flatArray = flatArray.concat(this.flatten(array[i]));
          } else {
            flatArray.push(array[i]);
          }
        }
      }
      return flatArray;
    },

    uniq: function(array, isSorted = true, iteratee = null) {
      let newArray = [];
      let objArray = [];

      if (iteratee){
        let newObj = {}
        for (let i = 0; i < array.length; i++){
          if (!newObj[iteratee(array[i])]){
            newObj[iteratee(array[i])] = array[i]
            newArray.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++){
          if (!newArray.includes(array[i])){
            newArray.push(array[i]);
          }
        }
      }
        return newArray;
      },

    keys: function(object){
      let newArray = [];

      for(let key in object){
        newArray.push(key)
      }
      return newArray;
    },

    values: function(object){
      let newArray = [];

      for(let key in object){
        newArray.push(object[key])
      }
      return newArray;
    },

    functions: function(object){
      let newArray = [];
      for(let key in object){
        if (object[key]){
          newArray.push(key)
        }
      }
      return newArray.sort();
    },

    giveMeMore: function() {

    }


  }
})()

fi.libraryMethod()
