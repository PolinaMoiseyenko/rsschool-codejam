const assert = require('assert');
const sumOfOthers = require('./src/sumOfOthers');

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

const make = require('./src/make');
describe('make', function () {
      function sum(a, b) {
        return a + b;
      }
      function differ(a, b) {
        return a - b;
      }
      function multiply(a, b) {
        return a * b;
      }
      function divide(a, b) {
        return a / b;
      }
      function power(a, b) {
        return (a ** b);
      }
      it('test 1: sum', () => {
        assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
      });
      it('test 2: differ', () => {
        assert.deepEqual(make(15)(34, 21, 666)(41)(differ), -747);
      });
      it('test 3: multiply', () => {
        assert.deepEqual(make(10)(9, 8, 7)(6)(multiply), 30240);
      });
      it('test 4: divide', () => {
        assert.deepEqual(make(300)(1, 2)(3, 4)(divide), 12.5);
      });
      it('test 5: power', () => {
        assert.deepEqual(make(2)(3)(3, 2)(power), 262144);
      });

});

const recursion = require('./src/recursion');
describe('recursion', function () {
    it('Test', () => {
        assert.deepEqual(recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}), [ [ 100 ], [ 90, 120 ], [ 70, 99, 110, 130 ] ]);
    });
});