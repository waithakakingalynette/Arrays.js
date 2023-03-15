//Find the last element of the following arrays.
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]
let lastelement=arr1.slice(-1)
console.log(lastelement)
let lastElement=arr2.slice(-1)
console.log(lastElement)

//Write a JS program that will join the following array elements into a string
myPets = ["Cow", "Bird", "Snake", "Dog"];
let b =myPets.join();
console.log(b)

//Write a JS script to sort the following array items
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let w=arr3.sort();
console.log(w)

//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
var arr = ["apple", "mango", "apple",
           "orange", "mango", "mango"];
 function removeDuplicates(arr){
    return[...new Set(arr)];
 }    
 console.log(removeDuplicates(arr))    
 
 //Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4];
if(arr5="way"){
   console.log("way")
}else{
   console.log("not found")
}

//Write a JS script to sort the following string
let word = "sevink"
// let sortedWord= word.sort().join(sortedWord);
console.log(word.split('').sort().join(''));

 