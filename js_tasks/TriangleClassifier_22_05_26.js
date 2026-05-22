/**
 * Write a program that classifies a triangle based on its side lengths.
 * Given three input values representing the lengths of the sides, 
 * determine if the triangle is equilateral (all sides are equal), 
 * isosceles (exactly two sides are equal), or scalene (no sides are equal).
 * Use an if-else statement to classify the triangle.
 */
{
// Type checking
// let side_A = 'hellow'
// let side_B = false
// let side_C = 50

// equilateral (all sides are equal)
// let side_A = 40
// let side_B = 40
// let side_C = 40

//isosceles (exactly two sides are equal
// let side_A = 40
// let side_B = 40
// let side_C = 50

// scalene (no sides are equal)
let side_A = 30
let side_B = 40
let side_C = 50

if ( typeof side_A === 'number' && typeof side_A === 'number' && typeof side_C === 'number'){
 if(side_A === side_B && side_B === side_C){
   console.log('Equilateral (all sides are equal)')
 }else if(side_A === side_B || side_B === side_C || side_A === side_C ){
   console.log('Isosceles (exactly two sides are equal)')
 }else{
    console.log('Scalene (no sides are equal)')
 }
}else{
   console.log("Verify the type of the current values")
   console.log(`Type of side_A : ${typeof side_A}`)
   console.log(`Type of side_A : ${typeof side_B}`)
   console.log(`Type of side_A : ${typeof side_C}`)
}

}
