arr = [3,5,1,4,2]

// let count = 0
// for (j = 0; j < arr.length; j++){
//     count++
//     for (let i = 0; i < arr.length -1; i++){
//         let A = arr[i],
//             B = arr[i + 1]
//         if (A > B) {
//         //Меняем местами
//             let temp = A
//             A = B
//             B = temp
//         }
//          arr[i] = A
//          arr[i + 1] = B
//          count++
//     }
// }
// console.log(arr)
// let count = 0
// for (j = 0; j < arr.length; j++){
//     for (let i = 0; i < arr.length -1; i++){
//         if (arr[i] > arr[i + 1]) {
//         //Меняем местами
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//         }
         
//          count++
//     }
// }

// function sort(arr) {
//     let result = [...arr]
//     for (j = 0; j < result.length; j++) {
//         for (let i = 0; i < result.length -1; i++){
//              if (result[i] > result[i + 1]) {
//         //Меняем местами
//                 let temp = result[i]
//                  result[i] = result[i + 1]
//                  result[i + 1] = temp
//             }
//          }
//      }
//     return result
// }
// console.log(arr)
// console.log(sort(arr))
function sort(arr, func) {
     let result = [...arr]
     for (j = 0; j < result.length; j++) {
         for (let i = 0; i < result.length -1; i++){
              if (func(result[i], result[i + 1])) {
         //Меняем местами
                 let temp = result[i]
                  result[i] = result[i + 1]
                  result[i + 1] = temp
             }
          }
      }
     return result
 }
 let users = [
      {name: 'John',age: 34},
      {name: 'Ane',age: 14},
      {name: 'Solo',age: 44},
      {name: 'Banana',age: 17},
      {name: 'Alex',age: 18},
      {name: 'Polina',age: 12}
 ]
console.log(sort(users, function (A, B){
     return A.name < B.name
}))