function fizzBuzz(phoneNumber) {
    let sum = 0;
    for (let digit of phoneNumber) {
      sum += parseInt(digit);
    }
  
    let output = "";
    for (let i = 1; i <= sum; i++) {
      if (i % 4 == 0 && i % 5 == 0) {
        output += "FizzBuzz ";
      } else if (i % 4 == 0) {
        output += "Fizz ";
      } else if (i % 5 == 0) {
        output += "Buzz ";
      } else {
        output += i + " ";
      }
    }
    console.log(output.trim());
  }
  
  let phoneNumber = "7021887320";
  fizzBuzz(phoneNumber);
  