
//1

// console.log(isLandscape(300, 600));

// function isLandscape(width, height){
//     return (width > height);
// }

//#################

//2

// const output = fizzBuzz(5);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//         return NaN;
    
//     if ((input % 3 === 0) && (input % 5 === 0))
//         return 'FizzBuzz';

//     if (input % 3 === 0)
//         return 'Fizz';

//     if (input % 5 === 0)
//         return 'Buzz';

//     return input;
// }

//#################

//3

// checkSpeed(130);

//  function checkSpeed (speed) {
//    const speedLimit = 70;
//    const kmPerPoint = 5;

//    if (speed < speedLimit + kmPerPoint) {
//     console.log('ok');
//      return;
//    }
//    const points = Math. floor((speed - speedLimit) / kmPerPoint);
//    if (points >= 12)
//      console. log( 'License suspended');
//    else
//      console. log('Points', points);
//  }

//#################

//4

// showNumbers (10);
//  function showNumbers (limit) {
//    for (let i = 0; i <= limit; i++) {
//      const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//      console. log(i, message);
//    }
//  }

//#################

//5

// const array = [0, null, undefined, '', 2, 3];
// console. log (countTruthy (array));
// function countTruthy (array) {
//    let count = 0;
//    for (let value of array)
//      if (value)
//       count++;
//    return count;
// }

//#################

//6

// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties (movie);
// function showProperties (obj) {
//    for (let key in obj) {
//      if (typeof obj [key] === 'string')
//       console. log (key, obj [key]);
//      }
// }

//#################

//7

// console. log(sum (10));

// function sum(limit) {
//    let sum = 0;
//    for (let i = 0; i <= limit; i++)
//      if (i % 3 === 0 || i % 5 === 0)
//        sum += i;
//    return sum;
//  }

//#################

//8

// const marks = [80, 80, 50];

// console.log(calculateGrade(marks));

// function calculateGrade (marks) {
//    const average = calculateAverage(marks);
//    if (average < 60) return 'F';
//    if (average < 70) return 'D';
//    if (average < 80) return 'C';
//    if (average < 90) return 'B';
//    return 'A';
// }

// function calculateAverage(array) {
//    let sum = 0;
//    for (let value of array)
//      sum += value;
//    return sum / array.length;    
// }

//#################

//9

// showStars (2);

//  function showStars(rows) {
//    for (let row = 1; row <= rows; row++) {
//        let pattern = '';
//        for (let i = 0; i < row; i++)
//          pattern += '*';
//        console. log (pattern);
//      }
//   }
                  
//#################

//10

// showPrimes(20);

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
        
//         return true;
// }