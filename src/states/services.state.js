const ServicesDefault = {
    header: {
        method: 'get',
        endpoint: 'api/header',
        port: null,
    },
    expense: {
        add: {
            method: 'post',
            endpoint: 'api/expense/add',
            port: null,
        },
    },
    sidebar: {
        method: 'get',
        endpoint: 'api/sidebar',
        port: null,
    },
    timeline: {
        method: 'get',
        endpoint: 'api/timeline',
        port: null,
    },
    status: {
        method: 'get',
        endpoint: 'api/status',
        port: null,
    },
};

const ServicesState = {
    dev: {
        ...ServicesDefault,
    },
    hom: {
        ...ServicesDefault,
    },
    prod: {
        ...ServicesDefault,
    },
};

export default ServicesState[process.env.REACT_APP_ENV];
