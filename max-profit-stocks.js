/*
Given a list of daily stock prices (integers for simplicity), return the buy and sell prices that will maximize the single buy/sell profit. 
If you can’t make any profit, try to minimize the loss.
*/

/*
You can solve this problem using a simple greedy approach by iterating through the list of stock prices while keeping track of the minimum price seen so far and the maximum profit.

In this implementation:

We initialize minPrice to the first price and maxProfit to 0.
We iterate through the prices starting from the second price.
For each price, we update minPrice if the current price is lower and update maxProfit if selling at the current price would yield a higher profit.
If maxProfit is still 0 after iterating through all prices, it means there's no profit to be made, so we minimize the loss by selecting the minimum price.
We return the buy and sell prices as an array.
*/

var maxProfit = function (prices) {
  if (prices.length < 2) return 0; // If there are fewer than two prices, no profit can be made

  let minPrice = prices[0]; // Initialize the minimum price to the first price
  let maxProfit = 0; // Initialize the maximum profit to 0

  let buyPrice = prices[0]; // Initialize the buy price to the first price
  let sellPrice = prices[0]; // Initialize the sell price to the first price

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update the minimum price if the current price is lower
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
      buyPrice = currentPrice;
      sellPrice = currentPrice;
    }

    // Update the maximum profit if selling at the current price would yield a higher profit
    if (currentPrice - minPrice > maxProfit) {
      maxProfit = currentPrice - minPrice;
      buyPrice = minPrice;
      sellPrice = currentPrice;
    }
  }

  // If maxProfit is still 0, it means there's no profit to be made, so we minimize the loss
  if (maxProfit === 0) {
    minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
        buyPrice = minPrice;
        sellPrice = minPrice;
      }
    }
  }

  return [buyPrice, sellPrice];
};
