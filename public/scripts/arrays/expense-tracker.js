const account = {
    name: 'Cyngynn',
    expenses: [],
    addExpense: function(description,amount){
        const expense = {description, amount};
        this.expenses.push(expense);
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;
        this.expenses.forEach((expense)=>{            
            totalExpenses += expense.amount;
        });
        this.income.forEach((income)=>{
            totalIncome +=  totalIncome += income.amount;
        });

        return `${account.name} has a total expenses of $${totalExpenses}. Remaining account balance is: $${totalIncome-totalExpenses}`;
    },
    income: [],
    addIncome: function(description,amount){
        this.income.push({description,amount});
    }
}

account.addExpense('coffee', 2);
account.addExpense('games', 69);
account.addExpense('dinner', 100);
account.addIncome('Partime project', 500);
account.addIncome('Monthly Salary', 1000);



// console.log(account);
 console.log(account.expenses);
 console.log(account.income);
 

console.log(account.getAccountSummary());








