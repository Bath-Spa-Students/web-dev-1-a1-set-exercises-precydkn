window.onload = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {input.addEventListener('change', calculate)})
}

function calculate() {
    const price = document.querySelector('#petrol_price').value;
    const litre = document.querySelector('#petrol_litre').value;

    if(!price || !litre) return;
    
    document.querySelector('#totalAmount').innerText = price * litre;
}