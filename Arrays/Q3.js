/*Question-> Create an array to store companies -> “Bloomberg”,"Microsoft","Uber","Goggle","IBM",
                                                    "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end*/
let companies=["Bloomberg","Microsoft","Uber","Goggle","IBM","Netflix"];
companies.shift(); //removed Bloomberg
companies.splice(1,1,"ola"); // 2 is index 1 is no.of item from index then add item.
companies.push("Amazon");// Amazon added in last
console.log(companies);