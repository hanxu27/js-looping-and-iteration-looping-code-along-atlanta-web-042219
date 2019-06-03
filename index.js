// Code your solutions in this file
function writeCards(params) {
  const output = [];
  for (let i = 0; i < params.length; i++) {
    output[i] = `Thank you, ${params[i]}, for the wonderful surprise gift!`;
  }
  return output;
}

function countdown(number) {
  for (let index = number; index >= 0; index--) {
    console.log(index);
  }
}