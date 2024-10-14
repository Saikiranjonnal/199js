var x = 10;
var x = 20; // No error


let y = 10;
y = 20; // No error
let y = 30; // Error: Identifier 'y' has already been declared


const z = 10;
z = 20; // Error: Assignment to constant variable.


// Example of var
function varExample() {
    if (true) {
      var x = 10; // 'var' is function-scoped
      console.log("Inside block (var):", x); // Output: 10
    }
    console.log("Outside block (var):", x); // Output: 10 (accessible outside the block)
  }
  
  varExample();
  
  // Example of let
  function letExample() {
    if (true) {
      let y = 20; // 'let' is block-scoped
      console.log("Inside block (let):", y); // Output: 20
    }
    // console.log("Outside block (let):", y); // Error: y is not defined
  }
  
  letExample();
  
  // Example of const
  function constExample() {
    const z = 30; // 'const' cannot be re-assigned
    console.log("Constant (const):", z); // Output: 30
    
    // z = 40; // Error: Assignment to constant variable
  
    const obj = { a: 1 }; // const object
    obj.a = 2; // Allowed: modifying properties of a const object
    console.log("Modified object property (const):", obj.a); // Output: 2
  }
  
  constExample();
  
  // Hoisting behavior
  function hoistingExample() {
    console.log(a); // Output
  
