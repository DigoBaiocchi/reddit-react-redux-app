export  async function redditApi() {
    const url = 'https://www.reddit.com/.json';
    const result = await fetch(url);
    const json = await result.json();
    
    return json.data.children;
}