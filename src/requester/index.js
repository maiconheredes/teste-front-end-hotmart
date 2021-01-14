const requester = async (services = {}, options = {}) => {
    try {
        return fetch()
            .then(response => {})
            .then(response => {
                return [null, response];
            })
            .catch(error => {
                if (error === '') {
                    return [error, null];
                }
                return [error, null];
            });
    } catch (error) {
        return [error, null];
    }
};