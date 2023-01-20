const tempInput = document.getElementById('tempInput');
const volInput = document.getElementById('volInput');
const pctInput = document.getElementById('pctInput');

function validateInputs() {
    let isValid = true;

    if (tempInput.value.toString() === '') {
        document.getElementById('tempError').innerHTML = "You did not enter a temperature";
        tempInput.classList.add('error');
        isValid = false;
    } else if (!Number.isInteger(Number(tempInput.value))) {
        document.getElementById('tempError').innerHTML = "Temperature should be an integer";
        tempInput.classList.add('error');
        isValid = false;
    }else{
        document.getElementById('tempError').innerHTML = "";
        tempInput.classList.remove('error');
    }

    if (volInput.value.toString() === '') {
        document.getElementById('volError').innerHTML = "You did not enter a volume";
        volInput.classList.add('error');
        isValid = false;
    } else if (isNaN(volInput.value)) {
        document.getElementById('volError').innerHTML = "Volume should be a decimal number";
        volInput.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('volError').innerHTML = "";
        volInput.classList.remove('error');
    }

    if (pctInput.value.toString() === '') {
        document.getElementById('pctError').innerHTML = "You did not enter a percentage";
        pctInput.classList.add('error');
        isValid = false;
    } else if (!Number.isInteger(Number(pctInput.value))|| Number(pctInput.value) < 0 || Number(pctInput.value) > 100 ) {
        document.getElementById('pctError').innerHTML = "Percentage should be an integer between 0 and 100";
        pctInput.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('pctError').innerHTML = "";
        pctInput.classList.remove('error');
    }
    return isValid;
}