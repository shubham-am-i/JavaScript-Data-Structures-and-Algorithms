function scope3(print) {
  if (print) {
    let insideIf = '12';
  }

  console.log(insideIf);
}
scope3(true); // prints ''
