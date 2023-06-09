/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  if (newWithdrawAmount < 0||isNaN(newWithdrawAmount)) {
    alert('Please Enter A Valid Amount Number !')
    return
  }
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  const previousBalanceTotal = getTextElementValueById("balance-total");
  if (newWithdrawAmount > previousBalanceTotal) {
    alert('Withdraw Is Not Much More Than Balance !')
    return
  }
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  //set withdraw amount
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
  inputValueEmpity("withdraw-field")
});
