const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const joinedArr = arr1.concat(arr2);
console.log(joinedArr); 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); 

const array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log(array1);


fruits.pop();
console.log(fruits);

const array2 = [1, 2, 3];
array2.shift();
console.log(array2);

fruits.sort();
console.log(fruits);

const slicedFruits = 
fruits.slice(1, 3);
console.log(slicedFruits);

const months = ["January", "March", "April", "June"];
months.splice(1, 0, "Febuary");

months.splice(5, 1);
console.log(months);