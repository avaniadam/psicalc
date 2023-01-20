  const loadingState = document.getElementById("loading-state");
loadingState.innerHTML = "Loading options...";

fetch('options.csv')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then(csvText => Papa.parse(csvText, { header: false, dynamicTyping: true, skipEmptyLines: true }).data)
  .then(csvData => {
    const options = csvData.map(d => ({ label: d[0], value: d[1] }));
    const autocompleteInput = document.getElementById("volInput");
    new Awesomplete(autocompleteInput, { list: options, minChars: 1 });
    autocompleteInput.addEventListener("awesomplete-selectcomplete", e => {
      const associatedValueInput = document.getElementById("volValue");
      associatedValueInput.value = e.text.value;
    });
    loadingState.innerHTML = "";
  })
  .catch(error => {
    console.error('Error:', error);
    loadingState.innerHTML = "An error occurred while reading the options file, please try again later.";
  });