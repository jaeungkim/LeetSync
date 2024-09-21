function findDisappearedNumbers(nums: number[]): number[] {
    let output: number[] = [];
    let hashMap = new Map<number, boolean>();

    // Mark all numbers that appear in nums
    for (let num of nums) {
        hashMap.set(num, true);
    }

    // Find numbers from 1 to n that do not appear in nums
    for (let i = 1; i <= nums.length; i++) {
        if (!hashMap.has(i)) {
            output.push(i);
        }
    }

    return output;
}
