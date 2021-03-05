const requester = async (service = {}, options = {}) => {
    const { method, endpoint, port } = service;

    const {
        body = undefined,
        mode = undefined,
        headers,
        responseType = 'json',
        qs = {},
    } = options;

    const config = {
        method,
        url: `${port ? `${process.env.REACT_APP_DOMAIN}:${port}/` : `${process.env.REACT_APP_DOMAIN}/`}${endpoint}`,
        body,
        headers,
        mode,
        qs,
    };

    let url = new URL(config.url);
    url.search = new URLSearchParams(config.qs);

    const getResponseType = (response) => {
        if (responseType === 'json') {
            return response.json();
        }

        return response.text();
    };

    try {
        return fetch(url, config)
            .then(response => getResponseType(response))
            .then(response => {
                if (response === '') {
                    return [null, 'empty'];
                }

                return [null, response];
            })
            .catch(error => {
                if (error === '') {
                    return ['empty', null];
                }

                return [error, null];
            });
    } catch (error) {
        return [error, null];
    }
};

export default requester;
