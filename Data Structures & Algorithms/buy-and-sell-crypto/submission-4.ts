class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res =0;
        let lowest = prices[0];
        for (let i=1;i<prices.length;i++) {
            res = Math.max(res, prices[i]-lowest);
            lowest = Math.min(lowest,prices[i]);
        }
        return res;
    }
}
