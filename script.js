// Santa was hoping for a white Christmas, but his weather machine's "snow" 
//function is powered by stars, and he's fresh out! To save Christmas, he 
//needs you to collect fifty stars by December 25th.
// Collect stars by helping Santa solve puzzles. 
//Two puzzles will be made available on each day in the Advent calendar; 
//the second puzzle is unlocked when you complete the first. Each puzzle grants one star.

// Here's an easy puzzle to warm you up.

// Santa is trying to deliver presents in a large apartment building, but he can't find 
//the right floor - the directions he got are a little confusing. He starts on the ground floor 
//(floor 0) and then follows the instructions one character at a time.

// An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), 
//means he should go down one floor.

// The apartment building is very tall, and the basement is very deep; he will never 
//find the top or bottom floors.

// For example:

// (()) and ()() both result in floor 0.
// ((( and (()(()( both result in floor 3.
// ))((((( also results in floor 3.
// ()) and ))( both result in floor -1 (the first basement level).
// ))) and )())()) both result in floor -3.
// To what floor do the instructions take Santa?
// (--> one floor upp , ) --> one floor down

const fs = require('fs');

function counting(){
    fs.readFile('./santa.txt', (err, data) => {
        console.time('conut sanata-time')
        const direction = data.toString();
        const directionArry = direction.split('');
        const answer = directionArry.reduce(( acc, curentvalue) =>{
            if (curentvalue === '('){
                return acc +=1
            } else if (curentvalue === ')'){
                return acc -=1
            }
        }, 0)
        console.timeEnd('conut sanata-time')
        console.log('floor: ' , answer);
    })

}
counting()

//CHECK WHen the santa enters the basement 

function counting2(){
    fs.readFile('./santa.txt', (err, data) => {
        console.time(' conut2 sanata-time')

        const direction = data.toString();
        const directionArry = direction.split('');
        let accmulator = 0
        let counter =0 
        const answer = directionArry.some(( curentItem) =>{
            if (curentItem === '('){
                 accmulator +=1
            } else if (curentItem === ')'){
                 accmulator -=1
            }
            counter ++
            return accmulator <0;
        })
        console.timeEnd(' conut2 sanata-time')
        console.log('Santa entred the basement at: ', counter)

    })
}

counting2()