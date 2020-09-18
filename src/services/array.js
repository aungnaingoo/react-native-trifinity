export default {
    arrayRemove,
    arrayRemoveByIndex,
    arrayRemoveByKey,
    clone,
    groupBy,
    indexOfByKey,
    objToArray,
    sort,
    sum,
}

export function sort(array, field) {
    return array.sort(function (a, b) { return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); })
}

export const arrayRemove = (arr, value) => {
    return arr.filter(function (ele) { return ele != value; });
}

export const arrayRemoveByKey = (arr, key, value) => {
    return arr.filter(function (ele) { return ele[key] != value; });
}

export const arrayRemoveByIndex = (arr, index) => {
    if (index > -1) {
        return arr.splice(index, 1);
    }
    return arr;
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

export const clone = arr => {
    var newArr = [];
    arr.map(item => newArr.push(item));
    return newArr;
};