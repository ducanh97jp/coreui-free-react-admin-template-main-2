
function reduce() {
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount);
    amount = amount - 1;
    document.getElementById("amount").value = amount;
    
}
function augment() {
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount);
    amount = amount + 1;
    document.getElementById("amount").value = amount;
}