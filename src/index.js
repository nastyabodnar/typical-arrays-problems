
exports.min = function min (array) {
    if (typeof(array) === 'undefined' || array.length === 0) {
      return 0;
    } else {
        let minValue = Math.min(...array);
        return minValue;
    }
  }
  
  exports.max = function max (array) {
    if (typeof(array) === 'undefined' || array.length === 0) {
      return 0;
    } else {
        let maxValue = Math.max(...array);
        return maxValue;
    }
  }
  
  exports.avg = function avg (array) {
    if (typeof(array) === 'undefined' || array.length === 0) {
      return 0;
    } else {
        let averageValue = array.reduce((accumulator, current) => (accumulator + current)) / array.length;
        return averageValue;
    }
  }
