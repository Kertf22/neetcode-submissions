class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res=0;
        for (let i=0;i<prices.length;i++) {
            let k = i+1;
            while(prices[k]>=prices[i]) {
                res = Math.max(prices[k]-prices[i],res);
                k++;
            }
        }

        return res;
    }
}
