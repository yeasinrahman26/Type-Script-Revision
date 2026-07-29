// array enums and tuples

// arrays
const chaiFlavours: string[] = ["ginger", "lemon"];
const price: number[] = [23, 43, 54];
const rating: Array<number> = [4.5, 5.0, 2.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Lemon", price: 25 },
  { name: "Ginger", price: 15 },
  { name: "Black", price: 5 },
];
menu.push({ name: "alu", price: 25 });

// readonly array

const cities: readonly string[] = ["Dhaka", "khulna"];

// cities.push("Dhaka");

const table: number[][] = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
];

// tuples

let chaiTuples: [string, number];

chaiTuples = ["ginger", 24];
// for updating always follow the order
chaiTuples = ["ginger", 14];

let userInfo: [string, number, boolean?];

userInfo = ["safa", 23];
userInfo = ["safa", 23, true];

// readonly tuples

const location: readonly [number, number] = [23.55, 254.44];

// name tuples

const chaiItems: [name: string, price: number] = ["lemon", 25];

// Enums
enum CupSize {
  SMAll,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;

enum Status {
  PENDING = 100,
  SERVED, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "Masala",
  GINGER = "Ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);

// this is not good always use number type or string type not random string number
enum RandomEnum {
  ID = 1,
  NAME = "chai",
}

const enum Sugars {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

const s=Sugars.HIGH


let t:[string,number]=["chai",25]

t.push('extra')