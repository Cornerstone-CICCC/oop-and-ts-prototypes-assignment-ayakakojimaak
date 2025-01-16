function Account(accountNumber, balance) {
  this._accountNumber = accountNumber;
  this._balance = balance;
}

Account.prototype.getBalance = function () {
  return this._balance.toFixed(2);
};

Account.prototype.deposit = function (amount) {
  this._balance += amount;
  return this.getBalance();
};

Account.prototype.withdraw = function (amount) {
  this._balance -= amount;
  return this.getBalance();
};

function SavingsAccount(accountNumber, balance, interestRate) {
  this._interestRate = interestRate;
  Account.call(this, accountNumber, balance, interestRate);
}
SavingsAccount.prototype = Object.create(Account.prototype);

SavingsAccount.prototype.addInterest = function () {
  this._balance += this._balance * (this._interestRate / 100);
  return this.getBalance();
};

function CheckingAccount(accountNumber, balance) {
  Account.call(this, accountNumber, balance);
}
CheckingAccount.prototype = Object.create(Account.prototype);

CheckingAccount.prototype.withdrawUsingCheck = function (amount) {
  this._balance -= amount;
  return this.getBalance();
};

// Test Code
console.log("Savings Account");
const savings = new SavingsAccount("ABCD", 1000, 2.5);
console.log(savings.deposit(500));
console.log(savings.addInterest());
console.log(savings.withdraw(300));

console.log("Checking Account");
const checking = new CheckingAccount("DEFG", 1500);
console.log(checking.deposit(200));
console.log(checking.withdrawUsingCheck(100));
console.log(checking.withdraw(500));
