// ============================================
// SAYLANI JS ASSIGNMENT - FIXED & READY TO RUN
// ============================================

// ---------------- 1. VARIABLES ----------------
console.log("=== 1. VARIABLES ===");

let userName = "Hasan";
console.log("userName:", userName);

var a = 10;
var a = 20;
console.log("Q4 Output:", a);

const arr = [1, 2, 3];
arr[0] = 99;
console.log("Mutable Array:", arr);

let name = "Hasan";
let age = 21;
let city = "Karachi";
console.log("My name is " + name + " and I live in " + city);

// ---------------- 2. STRING METHODS ----------------
console.log("\n=== 2. STRING METHODS ===");

let str = "Hello";
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());

let str2 = "javascript";
console.log("slice(0,4):", str2.slice(0, 4));

let fullName = "Muhammad Hasan";
console.log("Extract Hasan:", fullName.slice(9));

let word = "JavaScript";
console.log("charAt(2):", word.charAt(2));
console.log("indexing [2]:", word[2]);

let mixed = "hAsAn";
console.log("Lowercase:", mixed.toLowerCase());

let sentence = "My name is Hasan";
console.log("Split to Array:", sentence.split(" "));

// ---------------- 3. ARRAYS ----------------
console.log("\n=== 3. ARRAYS ===");

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log("Fruits:", fruits);

fruits.push("Kiwi");
console.log("After push:", fruits);
fruits.pop();
console.log("After pop:", fruits);

let arr3 = ["a", "b", "c"];
arr3.splice(1, 1, "z");
console.log("Splice Output:", arr3);

let nums = [10, 20, 30, 40];
console.log("First:", nums[0], "Last:", nums[nums.length - 1]);

let nestedFruits = [["apple"], ["banana", "orange"]];
console.log("Nested Access:", nestedFruits[1][1]);

// ---------------- 4. ARRAY METHODS ----------------
console.log("\n=== 4. ARRAY METHODS ===");

let arr4 = ["A", "B", "C"];
arr4.splice(2, 0, "Ali");
console.log("Insert Ali:", arr4);

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 2);
console.log("Remove 2 elements:", arr5);

let arr6 = [1, 2, 3, 4];
console.log("Slice 1 to 3:", arr6.slice(1, 3));

let arr7 = [1, 2, 3];
arr7.shift();
console.log("After shift:", arr7);
arr7.unshift(0);
console.log("After unshift:", arr7);

// ---------------- 5. OBJECTS ----------------
console.log("\n=== 5. OBJECTS ===");

let student = {
  name: "Hasan",
  age: 21,
  email: "hasan@gmail.com"
};
console.log("Student Object:", student);
console.log("Access name:", student.name);
console.log("Access age:", student["age"]);

console.log("Undefined property:", student.city);

student.city = "Karachi";
console.log("After adding city:", student);

console.log("Intro: My name is " + student.name + " and age is " + student.age);

// ---------------- 6. DATA TYPES ----------------
console.log("\n=== 6. DATA TYPES ===");

let x;
let y = null;
console.log("undefined:", x, "null:", y);

console.log("typeof []:", typeof []);
console.log("typeof {}:", typeof {});
console.log("typeof null:", typeof null);

let isOn = true;
isOn =!isOn;
console.log("Toggle boolean:", isOn);

// ---------------- 7. CONDITIONALS ----------------
console.log("\n=== 7. CONDITIONALS ===");

let num = 10;
if (num % 2 === 0) {
  console.log("10 is Even");
} else {
  console.log("10 is Odd");
}

let num2 = 5;
if (num2 > 0) {
  console.log("5 is Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

let num3 = 5;
if (num3 > 2) {
  console.log("Q4 Output: A");
} else {
  console.log("Q4 Output: B");
}

let email = "admin@gmail.com";
let password = "123";
if (email === "admin@gmail.com" && password === "123") {
  console.log("Login Success");
} else {
  console.log("Login Failed");
}

let balance = 5000;
let pin = 1234;
let enteredPin = 1234;
if (enteredPin === pin) {
  let amount = 1000;
  if (amount <= balance) {
    console.log("ATM: Paise nikal gaye");
  } else {
    console.log("ATM: Balance kam hai");
  }
} else {
  console.log("ATM: Galat PIN");
}

// ---------------- 8. SWITCH STATEMENT ----------------
console.log("\n=== 8. SWITCH STATEMENT ===");

let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid Day");
}

let tab = "about";
switch (tab) {
  case "home": console.log("Loading Home Page"); break;
  case "about": console.log("Loading About Page"); break;
  case "setting": console.log("Loading Setting Page"); break;
  default: console.log("Page Not Found");
}

let day2 = "Friday";
switch (day2) {
  case "Friday":
    console.log("Holiday");
    break;
  default:
    console.log("Working Day");
}

let a3 = 10;
let b = 5;
let op = "+";
switch (op) {
  case "+": console.log("10 + 5 =", a3 + b); break;
  case "-": console.log("10 - 5 =", a3 - b); break;
  case "*": console.log("10 * 5 =", a3 * b); break;
  case "/": console.log("10 / 5 =", a3 / b); break;
  default: console.log("Invalid Operator");
}

// ---------------- 9. LOOPS ----------------
console.log("\n=== 9. LOOPS ===");

console.log("1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("Even numbers 1 to 20:");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Q4 Loop Output:");
for (let i = 0; i < 3; i++) {
  console.log(i);
}

let fruits2 = ["Apple", "Banana", "Mango"];
console.log("Print Array with Loop:");
for (let i = 0; i < fruits2.length; i++) {
  console.log(fruits2[i]);
}

console.log("Nested Loop Example:");
for (let i = 1; i <= 3; i++) {
  console.log("Student " + i);
  for (let j = 1; j <= 3; j++) {
    console.log(" Subject " + j + " marks: 80");
  }
}

// ---------------- 10. NESTED ARRAYS + LOOPS ----------------
console.log("\n=== 10. NESTED ARRAYS & LOOPS ===");

let arr8 = [[1, 2], [3, 4]];
console.log("arr[1][0] =", arr8[1][0]);

let fruits3 = [["Apple", "Mango"], ["Banana", "Orange"]];
console.log("Print 2D Array:");
for (let i = 0; i < fruits3.length; i++) {
  for (let j = 0; j < fruits3[i].length; j++) {
    console.log(fruits3[i][j]);
  }
}

console.log("Multiplication Table 1-5:");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
  console.log("-----");
}

console.log("Star Pattern:");
for (let i = 1; i <= 4; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

console.log("\n=== ASSIGNMENT COMPLETE ===");