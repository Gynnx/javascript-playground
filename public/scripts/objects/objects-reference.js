let myAccount = {
    name: 'Cyngynn',
    expenses: 1000,
    income: 10000
}

let addExpense = (account,amount) => {
  account.expenses = account.expenses + amount;
  console.log(account);
  
};

addExpense(myAccount,500);
console.log(addExpense);
