const inputElement = document.querySelector('.js-cost-input');
const totalElement = document.querySelector('.js-total-cost');
const errorMessage = document.querySelector('.error-message');
function handleCostKeyDown(event) {
    if (event.key === "Enter") {
        calculateTotal();
    }
}

function calculateTotal() {
    let cost = Number(inputElement.value);
    let message = ''

    if (cost < 0) {
        message = 'Error: cost cannot be less than $0';
        errorMessage.innerHTML = message;
        totalElement.innerHTML = '';
    } else if (cost < 40) {
        cost += 10;
        totalElement.innerHTML = `$${cost}`;
        errorMessage.innerHTML = '';
    } else {
        totalElement.innerHTML = `$${cost}`;
        errorMessage.innerHTML = '';
    }
}