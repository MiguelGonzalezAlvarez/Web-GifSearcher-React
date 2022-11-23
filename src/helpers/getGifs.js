export const getGifs = async (category) => {
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${20}&api_key=JHMlxfcirzPsu2VpFWb06SpFuSbcZnNC`;

    const giphyResponse = await fetch(giphyUrl);
    const { data = [] } = await giphyResponse.json();

    const gifs = data.map(dataElement => ({
        id: dataElement.id,
        title: dataElement.title,
        url: dataElement.images.downsized_medium.url
    }));

    return gifs;
}