// Array Method

// removing element with Splice ()

let array = ['today', 'was', 'not', 'so', 'great'];


let newArray = array.splice(1,2);
console.log(newArray);


 console.log(array.splice(0,1));


//  Add Items with splice
// the 3rd element replaces the removed element
let arr = [1,2,3,4,5,5,7,8,9];
arr.splice(4,2,5,6);  // remove two elements starting from index 4 || add two elements
console.log(arr);


