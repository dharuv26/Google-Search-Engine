let query = document.querySelector('.query');
let srchbtn = document.querySelector('.srchbtn');
console.log(query.value);
srchbtn.onclick = function () {
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url, '_self');
}
let suggestionsContainer = document.querySelector('.suggestions-container');

// Predefined suggestions data
const suggestions = [
    'OpenAI',
    'Machine learning',
    'Artificial intelligence',
    'Web development',
    'Data science',
    'html',
    'javascript',
    'js',
    'css',
    'chitkara university',
    'chandigarh',
    'rajpura',
    'mumbai',
    'delhi',
    'weather',
    'why chitkara university is the best university',
    'Dr Ashok K Chitkara'
];

// Function to display suggestions as you type
function displaySuggestions() {
    let input = query.value.toLowerCase();
    let matchedSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(input));

    // Clear previous suggestions
    suggestionsContainer.innerHTML = '';

    // Display matched suggestions
    matchedSuggestions.forEach(suggestion => {
        let suggestionElement = document.createElement('div');
        suggestionElement.textContent = suggestion;
        suggestionElement.classList.add('suggestion');
        suggestionsContainer.appendChild(suggestionElement);
    });

    // Show or hide suggestions container based on matched suggestions
    if (input.length > 0 && matchedSuggestions.length > 0) {
        suggestionsContainer.style.display = 'block';
        searchHistoryContainer.style.display = 'none';
    }
     else {
        suggestionsContainer.style.display = 'none';
        searchHistoryContainer.style.display = 'block';
    }
}

// Event listener for input field input event
query.addEventListener('input', displaySuggestions);

// Event listener for search button click
srchbtn.addEventListener('click', function () {
    performSearch();
});

// Function to perform search
function performSearch() {
    let searchQuery = query.value.trim();

    // Check if the search query is not empty
    if (searchQuery !== '') {
        // Perform the search or redirect to the search results page
        let url = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
        window.open(url, '_self');
    }
}

// Event delegation for suggestion clicks
suggestionsContainer.addEventListener('click', function (event) {
    let clickedElement = event.target;

    // Check if the clicked element is a suggestion
    if (clickedElement.classList.contains('suggestion')) {
        let suggestionText = clickedElement.textContent;

        // Set the suggestion text as the search query and perform the search
        query.value = suggestionText;
        performSearch();
    }
});