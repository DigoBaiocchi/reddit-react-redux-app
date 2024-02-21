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
        case "popular":
            url = `${BASE_URL}/r/${pageName}/.json`;
            break;
        default:
            url = `${BASE_URL}/.json`;
    }
    
    const result = await fetch(url);
    const json = await result.json();

    return json.data.children;
};