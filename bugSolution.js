function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Handle null and undefined values
  }
  return a + b; 
}