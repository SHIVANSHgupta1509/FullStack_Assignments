/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let help={};
  for(let i=0;i<transactions.length;i++){
      let obji=transactions[i];
      let categoryi=obji.category;
      if(help[categoryi]){
        help[categoryi]+=obji.price;
      }
      else{
        help[categoryi]=obji.price;
      }
  }

  var keys=Object.keys(help);
  let res=[];

  for(let i=0;i<keys.length;i++){
      res.push({"category": keys[i], "totalSpent": help[keys[i]]})
  }
  return res;


}

module.exports = calculateTotalSpentByCategory;
