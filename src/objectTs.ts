const chai = {
  name: "ginger Tea",
  price: 20,
  isHot: true,
};

// {
//   name: string;
//   price: number;
//   isHot: boolean;
// }

let tea: {
  name: string;
  price: number;
  isHot: boolean;
};

tea = {
  name: "Ginger Tea",
  price: 20,
  isHot: true,
};

// Define the alias

type Tea = {
  name: string;
  price: number;
  ingredients: string[];
};

const ardrakChai: Tea = {
  name: "Adrak Chai",
  price: 25,
  ingredients: ["ginger", "cardamom"],
};

// duck Typing

type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };

let bigCup = { size: "500ml", material: "steel" };

smallCup = bigCup;

type Brew = {
  brewTime: number;
};

const coffee = { brewTime: 5, beans: "Arabic" };

const chaiBrew: Brew = coffee;

type User = {
  username: string;
  password: string;
};

const u: User = {
  username: "chaicode",
  password: "223",
};

// data types split out

type Item = { name: string; quantity: number };
type Address = { street: string; Road: string; pin: number };

type Order = {
  id: string;
  items: Item[];
  address: Address;
};

type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating user chai,", updates);
};

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
placeOrder({
  name: "masud",
  quantity: 2,
});

type Chai2 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai2, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "normal Tea",
  price: 20,
};

type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type PublicChai=Omit<Chai,"secretIngredients">;

// timeStamp = 2 hour 20 minutes 24 seconds
