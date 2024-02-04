// for given an array with mark of student ->[85,97,44,37,76,60]
//   find the average marks of the entire class
let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum=sum+val;
}
let avg=sum/marks.length
console.log(`average mark of the class is ${avg}`);