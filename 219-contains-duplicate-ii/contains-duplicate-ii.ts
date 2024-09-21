function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            console.log(Math.abs(map.get(nums[i]) - i));
            if (Math.abs(map.get(nums[i]) - i) <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }

    return false;
}
