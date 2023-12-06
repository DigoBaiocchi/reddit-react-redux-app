const BASE_URL = 'https://www.reddit.com/';

export async function homePageRedditApi() {
    const url = `${BASE_URL}.json`;
    const result = await fetch(url);
    const json = await result.json();
    
    return json.data.children;
}