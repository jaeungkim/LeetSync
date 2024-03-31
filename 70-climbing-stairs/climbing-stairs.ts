function climbStairs(n: number): number {
    if (n === 1 || n === 0) {
        return 1;
    }

    let dp = new Array(n+1);

    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n];
}