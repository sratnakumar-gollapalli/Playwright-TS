var userV = 100
console.log(`Value initialization : ${userV}`)

userV = 'Value updated to String Rohan'
console.log(`Value re initialization : ${userV}`)

// We will get error this : SyntaxError: Identifier 'userV' has already been declared
//let userV = true

var userV = false
console.log(`Redeclaration : ${userV}`)

function getUserDetails(){
    var userV = {
        first_name : 'Ram',
        gender : 'Male',
    }
    console.log(`Function scope initialization : ${userV.first_name} and ${userV.gender}`)
    var userV = {
        first_name : 'Sitha',
        gender : 'Female',
    }
        console.log(`Function scope re declared : ${userV.first_name} and ${userV.gender}`)

}getUserDetails()

console.log(userV)