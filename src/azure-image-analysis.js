const subscriptionKey = '';
const endpoint = '';

const apiEndpoint = `${endpoint}/vision/v3.0/analyze`;

const params = {
    visualFeatures: 'Categories,Description,Color',
    details: '',
    language: 'en',
};

// Headers for the API request
const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
};

export const analyzeImage = (imageUrl) => {
    // Make API using fetch
    return fetch(
        apiEndpoint,
        {
            method: 'POST',
            headers,
            body: JSON.stringify({ url: imageUrl }),
            params
        }
    )
        .then(response => response.json())
        .catch(error => console.error(error));
};
