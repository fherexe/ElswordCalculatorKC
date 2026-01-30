const kcInput = document.getElementById('kcInput');
const rateSelect = document.getElementById('rateSelect');
const resultElement = document.getElementById('result');

function calculate() {
    const kc = parseFloat(kcInput.value);
    const rate = parseFloat(rateSelect.value);

    if (isNaN(kc) || isNaN(rate) || kc === 0) {
        resultElement.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        return;
    }

    // Regra: 100 KC = rate ED
    let result = (kc * rate) / 100;

    if (Number.isInteger(result)) {
        resultElement.textContent = result;
    } else {
        resultElement.textContent = result.toFixed(2).replace('.', ',');
    }
}

// Dispara ao digitar KC
kcInput.addEventListener('input', calculate);

// Dispara ao escolher o rate
rateSelect.addEventListener('change', calculate);
