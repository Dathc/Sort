arr = [4,6,8,3,2,1]
//Сортировка выборкой
const insertion = (arr, i) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        const temp = arr[i]

        while(j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j --
        }
        arr[j + 1] = temp
    }

    return arr
}

console.log(insertion(arr))