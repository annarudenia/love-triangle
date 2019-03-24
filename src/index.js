/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++){
  var first = preferences[i];
  var next = preferences[first - 1];
  var last = preferences[next - 1];
  console.log(first,next,last);
  if (last == (i + 1)){
  
          count++;
      }

  }
  return Math.floor(count/3);
};
