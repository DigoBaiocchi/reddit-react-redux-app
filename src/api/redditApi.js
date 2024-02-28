const BASE_URL = 'https://www.reddit.com';

export const redditPageApi = async (pageName) => {
    let url = "";
    switch (pageName) {
        case "hot":
            url = `${BASE_URL}/${pageName}/.json`;
            break;
        case "new":
            url = `${BASE_URL}/${pageName}/.json`;
            break;
        case "best":
            url = `${BASE_URL}/${pageName}/.json`;
            break;
        case "home":
            url = `${BASE_URL}/.json`;
            break;
        case "subreddits":
            url = `${BASE_URL}/subreddits/.json`;
            break;
        default:
        url = `${BASE_URL}/r/${pageName}/.json`;
    }
    
    const result = await fetch(url);
    const json = await result.json();
    console.log(url);
    return json.data.children;
};

export const redditSearchApi = async (searchTerm) => {
    const url = `https://www.reddit.com/search/.json?q=${searchTerm}`;

    const result = await fetch(url);
    const json = await result.json();

    return json.data.children;
};