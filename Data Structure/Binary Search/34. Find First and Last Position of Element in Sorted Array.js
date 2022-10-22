/**
 *  Increasing - 1 2 3 4
    Nondecreasing - 1 1 2 3

    The difference being that in an increasing sequence, 
    for x(n) and x(n+1), x(n+1) > x(n) whereas in a non-decreasing sequence, x(n+1) >= x(n)
 */

function findIndex(position, nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (position === "start") {
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if (position === "end") {
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return left;
}

var searchRange = function (nums, target) {
    if (nums.length === 0) return [-1, -1];

    let result = [];

    let indexStart = findIndex("start", nums, target);
    let indexEnd = findIndex("end", nums, target) - 1;

    if (nums[indexStart] !== target) {
        return [-1, -1];
    }

    result.push(indexStart);
    result.push(indexEnd);

    return result;
};
