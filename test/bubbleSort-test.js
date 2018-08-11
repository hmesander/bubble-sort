assert = require('chai').assert;
const bubbleSort = require('../bubbleSort')

describe('Bubble Algorithm', function(){
  it('can sort a 1 element array', function(){
    assert.isArray(bubbleSort([3,2]));
    assert.deepEqual(bubbleSort([2]), [2]);
  });

  it('can sort a 2 element array', function(){
    assert.deepEqual(bubbleSort([3,2]), [2,3]);
  });

  it('can sort a 3 element array', function(){
    assert.deepEqual(bubbleSort([3,5,2]), [2,3,5]);
  });

  it('can sort a 4 element array', function(){
    assert.deepEqual(bubbleSort([7,3,5,2]), [2,3,5,7]);
  });

  it('can sort a 5 element array', function(){
    assert.deepEqual(bubbleSort([6,7,3,5,2]), [2,3,5,6,7]);
  });

  it('can sort a 12 element array', function(){
    assert.deepEqual(bubbleSort([12,4,3,8,0,6,7,3,13,2,5,2]), [0,2,2,3,3,4,5,6,7,8,12,13]);
  });

  it('can sort an array containing negative values', function(){
    assert.deepEqual(bubbleSort([12,4,3,-8,0,6,7,3,13,-2,5,2]), [-8,-2,0,2,3,3,4,5,6,7,12,13]);
  });

  it('can sort an empty array', function(){
    assert.deepEqual(bubbleSort([]), []);
  });

  it('can sort strings in ascending order by length', function(){
    assert.deepEqual(bubbleSort(['bobby', 'bob', 'bo']), ['bo', 'bob', 'bobby']);
  });
});
