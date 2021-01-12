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

export function arrayRemove(arr, value) {
    return arr.filter(function (ele) { return ele != value; });
}

export function arrayRemoveByKey(arr, key, value) {
    return arr.filter(function (ele) { return ele[key] != value; });
}

export function arrayRemoveByIndex(arr, index) {
    if (index > -1) {
        return arr.splice(index, 1);
    }
    return arr;
}

export function indexOfByKey(obj_list, key, value) {
    for (var index = 0; index < obj_list.length; index++) {
        if (obj_list[index][key] === value) return index;
    }
    return -1;
}

export function sum(arr, key) {
    return arr.length > 0 ? (arr.reduce((a, b) => {
        return { [key]: a[key] + b[key] }
    }))[key] : 0
}

export function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export function objToArray(obj) {
    return Object.keys(obj).map(function (objkey) {
        return { "key": objkey, "list": obj[objkey] };
    });
}
export function clone(arr) {
    var newArr = [];
    arr.map(item => newArr.push(item));
    return newArr;
};