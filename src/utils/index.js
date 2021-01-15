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
