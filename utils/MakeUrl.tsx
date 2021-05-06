// @ts-ignore
export const OpenDataUrlQueryParams = (baseUrl, params) =>{
    let url = baseUrl + '?' + Object.keys(params).map( k => {
        return (k.toLowerCase() == "servicekey") ? `${k}=${(params[k])}` : `${k}=${encodeURI(params[k])}`
    }).join('&');
    return url;
}

// @ts-ignore
export const getQueryParams = (params) => ( Object.keys(params).map( k => `${k}=${encodeURI(params[k])}`).join('&'));
        
