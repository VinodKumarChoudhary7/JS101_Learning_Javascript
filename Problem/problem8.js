//Problem 4: Given stored username and password and input username and password, Print if the user can log in or not.

let userName= "kd77@gmail.com";
let userPass= 779787;
let entName= "kd77@gmail.com";
let entPass= 779787;

if (userName==entName){
  if (userPass==entPass){
    console.log("Successfully login");
  } else {
  console.log("Incorrect Passward");
}
} else {
  console.log("incorrect userName");
}