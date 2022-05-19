arr = [4,2,8,7,1,3]

const q =(arr) => {
    if(arr.length < 2) {//ловим два случая когда массив пустой и когда в нем одна цифра
        return arr
    }

    const mid = Math.floor(arr.length / 2)

    const left = arr.filter(val => val < arr[mid])
    const right = arr.filter(val => val > arr[mid])
    return [...q(left), arr[mid], ...q(right)]
}

console.log(q(arr))