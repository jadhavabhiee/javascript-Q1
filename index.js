let n = 7; 


let string = "";

for(let i = 0; i < 5; i++) { // external loop
  for(let j = 0; j < 7; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
  
}
// printing the string
console.log(string);