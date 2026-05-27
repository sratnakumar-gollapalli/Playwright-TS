/*
 camelCase for variable and functions
*/
var userName = 'Raj'
function getUserName(){
    return 'Kumar'
}
 console.log(userName)
 console.log(getUserName())
/*
  PascalCase for Class name and Constructor name 
*/

var ClassName = 'Student'
var UserAddress = 'WallStreet'
console.log(ClassName)
console.log(UserAddress)

/*
  snake_case 
*/
var user_name = 'Sharan'
var user_marks = 95.6
console.log(user_name)
console.log(user_marks)

/*
  SCREAMING_SNAKE_CASE for constents
*/

const CUT_OF_MARKS = 35
console.log(CUT_OF_MARKS)

/*
Hungarian Notation (prefix with type - older style)
*/
var isProfileCheck = true
var strOfUser = 'Ram'
console.log(isProfileCheck)
console.log(strOfUser)

// Will get this error at run time : SyntaxError: Unexpected token '-'
//var user-name = 'Sri'
//var Last-Name = 'Ch'

