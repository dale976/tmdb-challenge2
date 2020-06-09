import {Utils} from 'wpe-lightning-sdk';

const api = 'https://api.themoviedb.org/3/movie/popular';
const apiKey = `66683917a94e703e14ca150023f4ea7c`;
let stage;

export const init = (stageInstance) =>{
    stage = stageInstance;
};


/**
 * @todo:
 * call get with the correct url
 * https://api.themoviedb.org/3/movie/popular
 * and return the data
 */
export const getMovies = async()=> {
    const url = new URL(api), params = {api_key:apiKey};
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    return await get(url.href)
};

const get = (url)=> {
    return fetch(url, {
        'Accept': 'application/json'
    }).then(response => {
        return response.json();
    })
};

