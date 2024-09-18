function majorityElement(nums: number[]): number {
    let count = 0;
    let answer = 0;
    let numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (numMap.has(nums[i])) {
            numMap.set(nums[i], numMap.get(nums[i]) + 1); // Increment the count
        } else {
            numMap.set(nums[i], 1); // Initialize count to 1
        }
    }

    for (let [key, value] of numMap) {
        if (value > count) {
            count = value;
            answer = key;
        }
    }

    return answer;
}