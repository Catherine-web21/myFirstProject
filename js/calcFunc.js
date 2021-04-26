
// get all elements from html
const quantity = getById('quantity');
const totalPrice = getById('totalPrice');
const tax = getById('tax');
const subtotal = getById('subtotal')

// get the value from the html content and use the functions to calculate
function getById(val){
    return document.getElementById(val)
}
quantity.addEventListener("input", getQuantity);
quantity.addEventListener("input", getTax);
quantity.addEventListener("input", getSubTotal);


// three function to calculate the subtotal, tax and estimated total
function getSubTotal(e){
    subtotal.innerHTML = e.target.value ? parseFloat(3.99 * e.target.value).toFixed(2) : 0;
}

function getTax(e){
    tax.innerHTML = e.target.value ? parseFloat((3.99 * e.target.value) * 0.13).toFixed(2) : 0;
}

function getQuantity(e){
    totalPrice.innerHTML = e.target.value ? parseFloat((3.99 * e.target.value) * 1.13).toFixed(2) : 0;
}