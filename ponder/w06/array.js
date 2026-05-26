// Javascript arrays
let myArray = ["milk", "eggs", "bread", "bananas"];
//ig i need to go shopping
console.log(myArray);

console.log(myArray[2]);

let nums = [3, 5, 7, 1];
console.log(nums);

console.log(typeof nums[1]);

//JS objects
//own custom datatype
let studentName = "Bob";
let studentClasses = ["wdd131", "rel351", "bus301"];
let studentGrades = [67, 95, 73];

//all of that goes into this
let student = {
    name: "bob",
    classes: ["wdd131", "rel351", "bus301"],
    grades: [67, 95, 73]
};

console.log(student.name)

//Array methods
myArray.forEach((item) => {
    //runs this function once for every element in the array
    //one at a time
    console.log(item);
})

let newNums = nums.map((num) => {
    return num * 10;
});

console.log(newNums);

let smallNums = nums.filter((num) => {
    return num < 5;
});

console.log(smallNums);