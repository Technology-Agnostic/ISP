function getHttpPostConfig() {
    const options = {
        withCredentials: true,
        method: 'POST'
        // ...
    };
    const headers = ...; // some logic
    const body = ...; // some logic
    return {
        options,
        headers,
        body
    };
}

export const config = {
    appConfig: ...,
    userConfig: ...,
    someConfig: ...
};
