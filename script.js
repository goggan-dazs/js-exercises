//const aString = "Hello World";
//let anotherString = `Most programs start with ${aString}`;
//const aNum = 42;

// Arrays are lists of things

//let anArray = [ 1, "two", 42, "Any valid data type", "Learning loops"];
// nums = [5, 5, 5, 5, 5];
//let sum = 1


// FOR LOOP

//for (let i = anArray.length; i > 0; i--) {
    //console.log("i is", i);
    //console.log(anArray[i]);
    //sum += nums[i];
    
//}


//console.log(sum);


//let counter = 10;

// While (true) run code

//while (counter > 0) {
   // console.log("The counter is", counter);
    //counter--;
//}

let newArray = [];

// MTHODS ARE JUST FUNCTIONS INSIDE OBJECTS
// .someMethod(someArgument)

//newArray.push("luke");
//newArray.push("zaphod");
//newArray.unshift("R2D2");

//console.log(newArray);
//console.log(newArray.indexOf("luke"));

let nums2 = [];

for (let k = 0; k < 10; k++) {
    nums2.push(k);
}

let slicedArray = nums2.slice(3, 6);
nums2.splice(3, 4);
console.log(slicedArray);
console.log(nums2);