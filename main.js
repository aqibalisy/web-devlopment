let arr = [];
let count = 0;

function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
        arr.push("FizzBuzz")
    } else if (count % 3 === 0) {
        arr.push("Fizz")
    } else if (count % 5 == 0) {
        arr.push("Buzz")
    } else {
        arr.push(count);
    }

    console.log(arr)

    count++;

}
