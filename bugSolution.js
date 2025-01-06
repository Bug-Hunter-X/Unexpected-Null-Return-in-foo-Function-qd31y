function foo(a, b) {
  if (a === null || b === null) {
    // Handle null values more robustly
    throw new Error('Null values are not allowed.'); //or 
    //return 0; //or any other appropriate default value
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
//console.log(foo(null, 2)); // throws an error
//console.log(foo(1, null)); // throws an error
//console.log(foo(null, null)); // throws an error