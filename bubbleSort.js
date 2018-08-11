function bubbleSort(array) {
  for (let n=0; n < (array.length - 1); n++) {
    for (let i=0; i < (array.length - n); i++) {
      if (array[i] > array[i+1]) {
        [ array[i], array[i+1] ] = [ array[i+1], array[i] ];
      }
    }
  }

  return array
}

module.exports = bubbleSort
