const arr = [1,2,3,4,5];
const obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
function log(item) {
  console.log(item);
}
function add(item) {
  return item + 1;
}

function even(item) {
  if (item % 2 === 0) {
    return true
  }
}

fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (const e of collection) {
          cb(e);
        }
      } else {
        for (const k in collection) {
          cb(collection[k]);
        }
      }
      return collection;
    },

    map: function(collection, cb) {
      if (Array.isArray(collection)) {
        let result = []
        for (const e of collection) {
          result.push(cb(e));
        }
        return result;
      } else {
        let result = []
        for (const k in collection) {
          result.push(cb(collection[k]));
        }
        return result;
      }
    },

    reduce: function(collection, cb, acc) {
      if (!acc) {
        acc = 0;
      }
      if (Array.isArray(collection)) {
        for (const e of collection) {
          acc = cb(acc, e, collection);
        }
      } else {
        for (const k in collection) {
          acc = cb(acc, collection[k], coll);
        }
      }
      return acc;
    },

    find: function(collection, cb) {
      let result = false
      if (Array.isArray(collection)) {
        for (const e of collection) {
          if (cb(e)) {
            result = true
            return result
          }
        }
      } else {
        for (const k in collection) {
          if (cb(collection[k])) {
            result = true
            return result
          }
        }
      }
      return result
    },

    filter: function(collection, cb) {
      if (Array.isArray(collection)) {
        let result = []
        for (const e of collection) {
          if (cb(e)) {
            result.push(e)
          }
        }
        return result
      } else {
        let result = {}
        for (const k in collection) {
          if (cb(collection[k])) {
            result[k] = collection[k]
          }
        }
        return result
      }

    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n) {
      if (!n) {
        n = 1
      }
      let result = array.slice(0, n)
      if (result.length > 1) {
        return result
      } else {
        return result[0]
      }
    },

    last: function(array, n) {
      if (!n) {
        n = 1
      }
      let result = array.slice(-n)
      if (result.length > 1) {
        return result
      } else {
        return result[0]
      }
    },

    compact: function(array) {
      result = []
      for (const e of array) {
        if (e) {
          result.push(e)
        }
      }
      return result
    },

    sortBy: function(array, cb) {
      if (typeof cb(array[0]) === "number") {
        return array.sort((a, b) => cb(a) - cb(b));
      } else {
        return array.sort((a, b) => cb(a).localeCompare(cb(b)))
      }
    },

    flatten: function(array, shallow) {
      let result = [];
      if (shallow) {
        for (const e of array) {
          if (Array.isArray(e)) {
            for (const e1 of e) {
              result.push(e1);
            }
          } else {
            result.push(e);
          }
        }
      } else {
        for (const e of array) {
          if (Array.isArray(e)) {
            result = result.concat(fi.flatten(e));
          } else {
            result.push(e);
          }
        }
      }
      return result;
    },

    uniq: function(array, isSorted, cb) {
      let result = [];
      let current = [];
      // if (!cb) {
      //   cb = function(item) {return item}
      // }
      // if (isSorted) {
      //   fi.sortBy(array, cb)
      // } else {
      //   let current = array.splice()
      // }

      if (!isSorted) {
        current = array.sort();
      } else {
        current = array.slice();
      }

      if (cb) {
        let cbArray = []
        for (const e of array) {
          cbArray.push(cb(e))
        }
        for (var i = 0; i < current.length; i++) {

          if (i !== 0) {
            if (!cbArray.includes()) { //this line broken
              result.push(current[i]);
            }
          } else {
            result.push(current[i])
          }
        }
      } else {
        for (var i = 0; i < current.length; i++) {
          if (i !== 0) {
            if (!result.includes(current[i])) {
              result.push(current[i]);
            }
          } else {
            result.push(current[i])
          }
        }
      }

      return result
    },

    keys: function(object) {
      let keys = []
      for (const k in object) {
        keys.push(k)
      }
      return keys
    },

    values: function(object) {
      let values = []
      for (const k in object) {
        values.push(object[k])
      }
      return values
    },

    functions: function(object) {
      let functions = []
      for (const k in object) {
        if (typeof object[k] === "function") {
          functions.push(object[k].name)
        }

      }
      return functions.sort()
    },
  }
})()

fi.libraryMethod()
