function fizzBuzz(val){
  if (val % 3 === 0 && val % 5 === 0){
    return ("FizzBuzz");
  }else if (val % 3 === 0){
    return ("Fizz");
  }else if (val % 5 === 0){
    return ("Buzz");
  }else{
    return val;
  }
}

function fizzBuzzCounter(val){
  for(let i = 1; i <= val; i++){
  console.log(fizzBuzz(val))    
  }
}

const fizzBuzz = num => {
  if (Number.isInteger(num) === false || num <= 0) {
    console.log("Input is not an integer or positive")
    return;
  } else if (num % 15 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

function fizzBuzzCounter(num){
  for (let rep = 1; rep <= num; rep++) {
    console.log(fizzBuzz(rep))
  }
}