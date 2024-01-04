// alert("Alert!") 
//Alert does not works in nodejs
// Let’s write some code - 
// 1. Write the program to greet a person given their first and last name 
// 2. Write a program that greets a person based on their gender. (If else) 
// 3. Write a program that counts from 0 - 1000 and prints (for loop)
firstName='Rohit';
lastName='Sharma';

console.log(`Welcome to cohort ${firstName} ${lastName}`);

//////////////////////////////////////////////////////////

isGender='Female';
// isGender='Female';

if (isGender=="Male"){
    console.log("Welcome to cohort bro!");
}else{
    console.log("Welcome to the cohort cutie!");
}

/////////////////////////////////////////////////////////

/**
 * A for loop program to print 0 to 100 numbers.
 */
/*
for (i=0;i<=100;i++){
    console.log(i);
}
*/
//for loop has ";" in JS

// 1. Arrays 
// 2. Objects

// Let’s write some code - 
// 1. Write a program prints all the even numbers in an array 
// 2. Write a program to print the biggest number in an arryay
// 3. Write a program that prints all the male people’s first name given a complex object 
// 4. Write a program that reverses all the elements of an array

/*
const givenNumbers=[11,22,33,44,55,66,77,88,99,100]
console.log("Below are the even numbers from the given array!");
for (i=0;i<givenNumbers.length;i++){
    
    if (givenNumbers[i]%2==0){
  
        console.log(givenNumbers[i]);
    }
}
*/
///////////////////////////////////////////////////////
const givenNumbers=[11,222,33,443,255,66,717,818,99,100]
console.log("Biggest Number!");
bigNumber=0
for (i=0;i<givenNumbers.length;i++){
    if (givenNumbers[i]>bigNumber){
        bigNumber=givenNumbers[i]        
    }
}
console.log(bigNumber);
///////////////////////////////////////////////
const objectName = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
  };
  ////////////
  //Reversed array 
  let arr = [1, 2, 3, 4, 5];
  let reversedArr = arr.reverse();
  console.log("The reversed array is: ", reversedArr);
  
  let revArr=[];
  for (i=arr.length - 1;i>=0;i--){
    revArr.push(arr[i]);
  }

  console.log("Reversed Array: ",revArr);

let arry = [11, 22, 33,44, 55];
let reversedArry = [];
for (let i = arry.length - 1; i >= 0; i--) {
  reversedArr.push(arry[i]);
}
console.log("The reversed array is: ", reversedArry);
