//  let num = prompt("enter a number");
// if(num % 5 ===0){
//     console.log(num,"number multiple of 5");
// }
// else{
// console.log(num,"number not multiple of 5");
// }

// conditional statement
// if mode is dark and light 

// let mode ="light";

// if(mode === "dark"){
//     color ="black";
// }
// if(mode === "light"){
//     color ="white";
// }
// console.log(color);

// 2. if mode age is 18 then vote else not vote

// let age = 16;
// if(age>=18){
//     console.log("vote");
// }
// else{
// console.log("not vote");
// }

// 3. odd even

// let num = 11;
//  if(num%2 === 0){
//     console.log(num,"even number");
//  }
//  else{
//     console.log(num,"odd number")
//  }

// 4. else-if statement

// let mode = "dark";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// else if (mode === "blue") {
//     color = "blue";
// }
// else if (mode === "pink") {
//     color = "pink";
// }else {
//     color = "white";

// }
// console.log(color)

// 5. WAC which can give grades to students according to their score:90-100,A 70-89 B,60-69,c 50-59,D 0-49,F.

// let score = 75;
// let grade;
// if(score >= 90 && score <= 100){
//     grade ="A"
// }
// else if(score >= 70 && score <= 89){
//     grade = "B";

// }else if(score >= 60 && score <= 69){
//     grade = "C";

// }
// else if(score >= 50 && score <= 59){
//     grade = "D";

// }
// else if(score >= 0 && score <= 49){
//     grade = "F";

// }
// console.log("according to your score, your grade was:",grade)

// 6. for Loop  Calculate sum of 1 to 5
// let sum = 0;

// for (let i = 1; 1 <= 5; i++) {
// sum = sum + i;
// }
// console.log("sum = ", sum);

// 7. while loop  Concept not cleared
// let i = 1;
// while (i <= 10){
//     console.log("Nisha");
//     i++;
// }

// 8.do while loop
// let i = 1;
// do{
//     console.log("i=",i);
//     i++;

// }while(i <= 10);

// 9. For-of loop used for string
// let str = "nisha";
// for(let i of  str ){
//   console.log("i", i)  
// }

// 10. for in loop used for OBJECTS(using for key and value )

// let student = {
//     name:"Nisha kumari",
//     age : 20,
//     cgpa:7.5,
//     ispass: true,
// };
// for (let key in student){
//     console.log("key=",key,"value=",student[key]);
// // }
// 11. print all even no
// for(let num = 0; num <= 100; num++){
//     if(num % 2 == 0)
//     console.log("num =",num);
// }
// 12 guess the game no

// let gameNum = "25";
// let userNum = prompt("guess the game number : " );

// while(userNum != gameNum) {
//   userNum =  prompt(" you entered wrong number guess the game number again: " );
// }
// console.log("congratualtaion, you entered the correct number ");

// 13. Arrays
// let heroes=["nisha","hulk","thor","batman"];
// let marks=[96,75,48,83,66];
// let info=["rahul",86,"Delhi"];
// console.log(marks);
// console.log(marks.length);

// 14.looping over an array(using for loop)
// let heroes = ["nisha","thor","hulk","gita","rita"]
// for(let i=0; i < heroes.length; i++){
//   console.log(heroes[i]);
// }

// 15 qn. for a given array with marks of student ->[85,97,44,37,76,60]
// find the avg marks of the entire class.
// let marks = [85,97,44,37,76,60]
// let sum = 0;

//   for (let val of marks) {
//     sum = sum + val;// instead of sum + we can uae +=

//   }
//   let avg = sum / marks.length;
//   console.log(`avg marks of the class = ${avg}`);

// 16. qn For a given array with prices of 5 items ->[250,645,300,900,501]
// All items have an offer of 10% OFF on them. change the array to store final price after applying offer.

// let items = [250,645,300,900,501];
// let i = 0;
// for(let val of items){

//   console.log(`value at index ${i} = ${val}`);
//   let offer = val / 10;
//   items[i] = items[i] - offer;
//   console.log(`value after offer = ${items[i]}`);
//   i++;
// }

//                ORRRRR

// this code not working 

// let items = [250, 645, 300, 900, 501];
// for (let i = 0; i < items.length; i++) {
//   let offer = items[i]
//   items[i] -= offer;
// }
// console.log(items);

// 17. Arrays Method like push pop tostring

// let foodItems = ["potato", "apple", "tomato","carrot"];
// foodItems.push("chips","icecream");
// console.log(foodItems);


// let foodItems = ["potato", "apple", "tomato","carrot"];
// console.log(foodItems);
//  let deletedItem = foodItems.pop();
//  console.log(foodItems);
//  console.log("deleted",deletedItem);

// toString(convert arrays to Stirng)

// 18 Qn  Creat an array to store companies ->"Drighna","microsoft","Uber","google","IBM"
// a> Remove the first company from array 
// b>Remove Uber & Add ola in its place.
// c>Add Amazon at the end

// let companies = ["Drighna","microsoft","Uber","google","IBM"];
// companies.shift();

// companies.splice(2,1,"ola");

// companies.push("Amazon");
// console.log(companies);


//  function myFunction(msg) { //parameter
//   console.log(msg);
//  }
//  myFunction("hello nisha");//argument

// Qn19. create a function which is sum of two number
// a = [1,2,3];
// let deletedItem = a.pop();
// ;
//  console.log(a)

// let age = 67;
// let gender = 'male';
// let discount;

// if(age<5){
//     console.log('100');
// }else if(gender ==='female'){
//     console.log('50');
// }else if(age>=5 && age<=8){
//     console.log('40');
// }else if(age>=65){
//     console.log('30');
// }else{
//     console.log('0');
// }