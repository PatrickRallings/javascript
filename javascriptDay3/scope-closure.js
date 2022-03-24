function outer() {
  let a = "string";
  let b = { object: "ob" };
  console.log(a, b);

  function inner(a, b) {
    console.log(a, b);
    a = "otherstring";
    b = { object2: "no" };
    console.log(a, b);
    b = { object2: "ok" };
    console.log(a, b)
  }
  inner(a, b);
}
outer();
