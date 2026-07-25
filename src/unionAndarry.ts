// let subs = 10

// let sub2 = "1M"

//if the value of subs is changed
//  to string then it will give error
//  because the type of subs is number
// and it cannot be changed to string.

let subs: number | string = 10;

let apiRequestStatus: "pending" | "success" | "error" = "pending";
//  apiRequestStatus = "Mr Banana" // not valid cause it's not one of the allowed string literals
apiRequestStatus = "success"; // valid

let airlineSeat: "aisle " | "window" | "middle" = "middle";

airlineSeat = "window"; // valid


//  best example for union type is when we have a 
// variable that can hold multiple types of values. 
// For example, we can have a variable that can hold 
// either a string or a number. This is useful when we want
//  to allow for flexibility in the types of values that can be 
// assigned to a variable.

const orders = ["12", "13", "14", "15"];

let currentOrder: string | undefined;

for (let order of orders) {
  if (order === "15") {
    currentOrder = order;
  }
  currentOrder = "11";
}

console.log(currentOrder);
