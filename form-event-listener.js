const form = document.getElementById('calcForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateInputs()) {
        const temp = parseInt(tempInput.value);
        const vol = parseFloat(volInput.value);
        const pct = parseFloat(pctInput.value);
        document.getElementById('displayPsi').innerHTML = calculatePsi(temp, vol, pct) + " psi";
    }
});