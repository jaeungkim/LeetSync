function fourSum(nums: number[], target: number): number[][] {
    const results: number[][] = [];

    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Iterate over the array
    for (let i = 0; i < nums.length - 3; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Skip duplicate values for the second number
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // Step 3: Use two pointers for the third and fourth numbers
            let left = j + 1;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    // Found a valid quadruplet
                    results.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Skip duplicates for the third number
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for the fourth number
                    while (left < right && nums[right] === nums[right - 1]) right--;

                    // Move both pointers after finding a valid quadruplet
                    left++;
                    right--;
                } else if (sum < target) {
                    // If the sum is less than target, move the left pointer to increase the sum
                    left++;
                } else {
                    // If the sum is greater than target, move the right pointer to decrease the sum
                    right--;
                }
            }
        }
    }

    return results;
}
