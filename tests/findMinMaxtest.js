  'use strict';

  var findMinMax = require('../library.js').findMinMax;

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [3, 10] for [3, 10, 4]', function () {
        expect(findMinMax([3, 10, 4])).toEqual([3, 10]);
      })
      it('should return [-2, 8] for [-2, 4, 5, 1, 8]', function() {
        expect(findMinMax([-2, 4, 5, 1, 8])).toEqual([-2, 8]);
      })
      it('should return [0, 18] for [3, 0, 1, 5, 18]', function () {
        expect(findMinMax([3, 0, 1, 5, 18])).toEqual([0, 18]);
      })

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [-2] for [-2, -2, -2]', function () {
        expect(findMinMax([-2, -2, -2])).toEqual([-2]);
      })
      it('should return [5] for [5, 5]', function () {
        expect(findMinMax([5, 5])).toEqual([5]);
      })
      it('should return [8] for [8, 8, 8, 8]', function () {
        expect(findMinMax([8, 8, 8, 8])).toEqual([8]);
      })

    });

  });