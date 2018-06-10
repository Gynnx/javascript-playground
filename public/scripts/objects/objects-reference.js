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

let myAccount = {
    name: 'Cyngynn',
    expenses: 0,
    income: 0
}

let addExpense = (account,amount) => {
  account.expenses = account.expenses + amount;
  //console.log(account);
  
};

let addIncome = function (account, amount){
  account.income = account.income + amount;
};

let resetAccount = (account) => {
  account.income = 0;
  account.expenses = 0;
};


let getAccountSummary = (account) => {
  let balance = account.income - account.expenses;
return `Account for ${account.name} has $${balance} income and $${account.expenses} expenses`;
};

addExpense(myAccount,500);
addIncome(myAccount,5000);
addExpense(myAccount,500);
addExpense(myAccount,500);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
