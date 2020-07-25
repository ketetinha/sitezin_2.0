//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

add = (num1, num2, callback) => {
    setTimeout(() => callback(num1+num2), 2000)
}

function callback(num){
    console.log(num);
}

add(1, 4, callback)