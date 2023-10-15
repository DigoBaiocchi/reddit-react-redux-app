export default async function redditApi() {
    const url = 'https://www.reddit.com/best.json';
    const result = await fetch(url);
    const json = await fetch.json();
    console.log(json)
    return json;
}