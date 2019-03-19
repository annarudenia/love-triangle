/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []){
  let length = preferences.length; 
  let count = 0;  
  for (let i = 0; i<length; i++) { 
      let first = preferences[i] - 1;
      if (first == i) continue;
      let middle = preferences[first] - 1;
      if (first == middle) continue;
      let last = preferences[middle] - 1;
      if (last == middle) continue;
      if (last == i) {
          count++;
      }
   }
   return count / 3;
  };
