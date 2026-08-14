class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let res=0;
        let k=1;
        for (let i=0;i<prices.length;i++) {
            if(k==i) k++;
            while(prices[k]>=prices[i]) {
                res = Math.max(prices[k]-prices[i],res);
                k++;
            }
        }

        return res;
    }
}
