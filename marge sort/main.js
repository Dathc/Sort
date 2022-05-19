arr = [2,5,3,1,6,9,7,8]

const merging = (left, right) => {
    const result =[]

    while (left.length && right.length) {
        if (left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }
    while (right.length) {
        result.push(right.shift())
    }

    return result
}

const m = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)

    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)

    return merging(m(left), m(right))
}

console.log(m(arr))