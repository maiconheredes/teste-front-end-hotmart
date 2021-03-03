export const copyObj = (obj) => {
    var newObj = (obj instanceof Array) ? [] : {};

    for (let property in obj) {
        if (obj[property] && typeof obj[property] == 'object') {
            newObj[property] = copyObj(obj[property]);
        } else {
            newObj[property] = obj[property];
        }
    }

    return newObj;
};

export const coinSignal = (coin) => {
    return coin.declared > coin.received ? '-' : '';
};

export const coinResult = (coin) => {
    return Math.abs(coin.declared - coin.received);
};
