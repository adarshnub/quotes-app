const BASE_URL = 'https://api.quotable.io';


export const fetchQuote = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
}

export const fetchTags = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    const data = await response.json();
    return data;
   
}


export const fetchQuoteByTag = async (tag) => {
    const response = await fetch(`${BASE_URL}/random?tag=${tag}`);
    const data = await response.json();
    return data;
}