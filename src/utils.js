export function getIdFromUrl(url) {
    const splitUrl = url.split('/');
    return splitUrl[splitUrl.length - 2];
}

export function getReleaseYear(date) {
    const splitReleaseDate = date.split('-');
    return splitReleaseDate[0];
}