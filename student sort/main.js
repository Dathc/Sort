let users = [
    {name: 'John',age: 34},
    {name: 'Ane',age: 14},
    {name: 'Solo',age: 44},
    {name: 'Banana',age: 17},
    {name: 'Alex',age: 18},
    {name: 'Polina',age: 12}
]

// function sortUsers(users, prop, dir = false){
//     let result = users.sort(function(a, b){
//         let dirIf = a[prop] < b[prop]

//         if (dir == true) dirIf = a[prop] > b[prop]
//         if (dirIf == true) return -1
//     })
//     return result
// }

//Сокращённый вариант
const sortUsers = (users, prop, dir = false) => users.sort((a,b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0)

console.log(sortUsers(users, 'age', true))