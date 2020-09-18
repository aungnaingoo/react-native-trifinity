export default {
    arrayRemove,
    arrayRemoveByKey,
    indexOfByKey,
    sum,
    groupBy,
    objToArray
}

export const arrayRemove = (arr, value) => {
    return arr.filter(function (ele) { return ele != value; });
}

export const arrayRemoveByKey = (arr, key, value) => {
    return arr.filter(function (ele) { return ele[key] != value; });
}

export const indexOfByKey = (obj_list, key, value) => {
    for (var index = 0; index < obj_list.length; index++) {
        if (obj_list[index][key] === value) return index;
    }
    return -1;
}

export const sum = (arr, key) => {
    return arr.reduce((a, b) => {
        return a[key] + b[key]
    })
}

export const groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export const objToArray = (obj) =>
    Object.keys(obj).map(function (objkey) {
        return { "key": objkey, "list": obj[objkey] };
    });
