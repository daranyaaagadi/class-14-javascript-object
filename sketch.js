//javaScript object
//json data =javascript object notations, key:value pair data
var student={
  name:"Daranya",
  class:8,
  roll_no:06,
  favourite_subject:"English",
  marks:[70,73,75,72,69]
}




function setup() {
  createCanvas(400, 400);
  console.log(student.name);
  console.log(student.class);
  console.log(student.favourite_subject);

}

function draw() {
  background(220);
}