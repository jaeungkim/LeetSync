function maxProfit(prices: number[]): number {
    let profit = 0;                // To keep track of maximum profit
    let minPrice = Infinity;       // Initialize minPrice to a very high value

    for (let price of prices) {
        // Update the minimum price if the current price is lower
        if (price < minPrice) {
            minPrice = price;      // New minimum price found minPrice = 1
        }
        // Calculate potential profit if sold today
        const currentProfit = price - minPrice; // profit == 4
        // Update max profit if current profit is higher
        if (currentProfit > profit) {
            profit = currentProfit; // Update max profit
        }
    }

    return profit;                 // Return the maximum profit found
}
