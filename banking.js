// common function
// get Input Value
function getInputValue(fieldId) {
    const inputValue = document.getElementById(fieldId);
    const inputText = inputValue.value;
    const inputTextValue = parseFloat(inputText);
    inputValue.value = '';
    return inputTextValue;
}
// get inner text
function getInnerText(fieldId) {
    const innerTextAmount = document.getElementById(fieldId);
    const innerTextValue = innerTextAmount.innerText;
    const value = parseFloat(innerTextValue);
    return value;
}
// update input value in their field
function getAmount(amountId, amount) {
    const getAmountField = document.getElementById(amountId);
    const amountValueInText = getAmountField.innerText;
    const amountValue = parseFloat(amountValueInText);
    const value = amountValue + amount;
    getAmountField.innerText = value;
}
// total balance update
function updateCurrentBalance(amount, isAdding) {
    const currentBalance = document.getElementById('current-balance');
    const currentBalanceInText = currentBalance.innerText;
    const currentBalanceValue = parseFloat(currentBalanceInText);
    let balance;
    if (isAdding == true) {
        balance = currentBalanceValue + amount;
    }
    else {
        balance = currentBalanceValue - amount;
    }
    currentBalance.innerText = balance;
}
// deposite button
document.getElementById('deposite-button').addEventListener('click', function () {
    const amount = getInputValue('deposite-input');
    if (amount > 0) {
        getAmount('deposite-amount', amount);
        updateCurrentBalance(amount, true);
    }
})
// withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const currentBalance = getInnerText('current-balance');
    if (amount > 0 && amount <= currentBalance) {
        getAmount('withdraw-amount', amount);
        updateCurrentBalance(amount, false);
    }
})