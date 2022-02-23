
function getInputField(inputId) {
    const inputField = document.getElementById( inputId );
    const inputValue = parseFloat( inputField.value );
    inputField.value = '';
    return inputValue;
}
function getTextField( textFieldId,amount ) {
    const balanceText = document.getElementById( textFieldId, );
    const balanceValue = parseFloat( balanceText.innerText );
    balanceText.innerText = balanceValue + amount;
}
function updateTotral(amount,isAdd) {
    const balanceTotalField = document.getElementById( 'total-balance' );
    const totalBalance = parseFloat( balanceTotalField.innerText );
    
    if ( isAdd==true ) {
        balanceTotalField.innerText = totalBalance + amount;
    }else {
        balanceTotalField.innerText = totalBalance - amount;
    } 
}

//Deposit Section
document.getElementById( 'deposit-btn' ).addEventListener( 'click', function () {
    const depositAmount=getInputField( 'deposit-input' );
    if ( depositAmount > 0 ) {
        getTextField( 'deposit-balance', depositAmount );
        updateTotral(depositAmount,true);
    }
} );

//Withdraw Section 
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function () {
    const withdrawAmount = getInputField( 'withdraw-input' );
    if ( withdrawAmount > 0 ) {
        getTextField( 'withdraw-balance', withdrawAmount );
        updateTotral(withdrawAmount,false);
    }
} );