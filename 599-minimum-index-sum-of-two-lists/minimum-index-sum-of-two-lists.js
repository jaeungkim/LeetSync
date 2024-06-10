/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const map = new Map();
    const result = [];
    let minSum = Infinity;

    // Populate the map with list1's elements and their indices
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }

    // Iterate through list2 and find common elements with minimum index sum
    for (let j = 0; j < list2.length; j++) {
        if (map.has(list2[j])) {
            const sum = j + map.get(list2[j]);
            if (sum < minSum) {
                minSum = sum;
                result.length = 0;  // Clear the result array
                result.push(list2[j]);
            } else if (sum === minSum) {
                result.push(list2[j]);
            }
        }
    }

    return result;
};