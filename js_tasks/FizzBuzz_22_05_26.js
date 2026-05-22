/**
 * Write a program that prints numbers from 1 to 100.
 * However, for multiples of 3, 
 * print "Fizz" instead of the number, 
 * and for multiples of 5, print "Buzz." 
 * For numbers that are multiples of both 3 and 5, print "FizzBuzz."
 */

let counter = 1
while(counter<=100){
    if(counter%3 === 0 && counter%5 ===0){
       console.log('FizzBuzz')
    }else if(counter % 3 === 0){
       console.log('Fizz')
    }else if(counter % 5 === 0){
       console.log('Buzz')
    }else{
       console.log(counter)
    }

    counter++
}