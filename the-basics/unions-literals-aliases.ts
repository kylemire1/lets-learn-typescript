type Combinable = number | string;
type ConversionType = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionType
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 32, "as-number");
console.log({ combinedAges });

const combinedStringAges = combine("30", "26", "as-number");
console.log({ combinedStringAges });

const combinedNames = combine("Ky", "Mary", "as-text");
console.log({ combinedNames });
