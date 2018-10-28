var assert = require('assert');
var sumOfOthers = require('./src/sumOfOthers');

describe('sumOfOthers', function () {
    it('Test 1', () => {
        assert.deepEqual(sumOfOthers([2, 3, 4, 1]), [8, 7, 6, 9]);
    });

    it('Test 2', () => {
        assert.deepEqual(sumOfOthers([2, 3, 4, 5]), [12, 11, 10, 9]);
    });

    it('Test 3', () => {
        assert.deepEqual(sumOfOthers([1, 0]), [1, 0]);
    });

    it('Test 4', () => {
        assert.deepEqual(sumOfOthers([0, 0, 0]), [0, 0, 0]);
    });

    it('Test 5', () => {
        assert.deepEqual(sumOfOthers([-5, 10, -3]), [7, -8, 5]);
    });
});