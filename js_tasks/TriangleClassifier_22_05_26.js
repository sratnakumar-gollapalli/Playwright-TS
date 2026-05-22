/**
 * Write a program that classifies a triangle based on its side lengths.
 * Given three input values representing the lengths of the sides, 
 * determine if the triangle is equilateral (all sides are equal), 
 * isosceles (exactly two sides are equal), or scalene (no sides are equal).
 * Use an if-else statement to classify the triangle.
 */

// let side_A = 40
// let side_B = 40
// let side_C = 40

// let side_A = 40
// let side_B = 40
// let side_C = 50

let side_A = 30
let side_B = 40
let side_C = 50

if(side_A === side_B && side_B === side_C){
   console.log('Equilateral (all sides are equal)')
}else if(side_A === side_B || side_B === side_C || side_A === side_C ){
   console.log('Isosceles (exactly two sides are equal)')
}else{
    console.log('Scalene (no sides are equal)')
}