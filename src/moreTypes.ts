let response: any = "42";

// let numericLength:number = response.length
let numericLength: number = (response as string).length;

type Book = {
  name: string;
};

let bookString = '{"name" : "one book"}';

let bookObj = JSON.parse(bookString);

console.log(bookObj);

const inputElement = document.getElementById("username") as HTMLInputElement;

let value: any;

value = "Chai";

value = [1, 3, 4];
value = 2.5;
value.toUpperCase();

let newValue: unknown;

newValue = "Chai";

newValue = [1, 3, 4];
newValue = 2.5;
if (typeof newValue === "string") {
  newValue.toLowerCase();
}

// try catch block

try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("Error", error);
}

// type Never

const data: unknown = "chai or code";

const strData: string = data as string;

type Role = "admin" | "user"| "superAdmin";

function redirectBasedOnRole(role: Role): void {
    if(role === "admin"){
        console.log("Redirecting to admin Dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirecting to user Dashboard");
        return
    }
    role
}


function neverReturn():never{
    while(true){  }
}