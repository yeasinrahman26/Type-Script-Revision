type ChaiOrder = {
  type: string;
  sugar: number;
  strong: boolean;
};

function makeChai(order: ChaiOrder) {
  console.log(order);
}

function serveChai(order: ChaiOrder) {
  console.log(order);
}

type TeaRecipe = {
  water: number;
  milk: number;
};
class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// type Response = {ok: true} | {ok:false}

// class myRes implements Response {
//     ok :boolean = true
// }

// literal types

type TeaType = "malasa" | "ginger" | "lemon";

function orderChai(tea: TeaType) {
  console.log(tea);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };
type MixChai = BaseChai & Extra;

const cup: MixChai = {
  teaLeaves: 2,
  masala: 2,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Yeasin" };
// const u2: User = { bio: "I am the king" };

type config = {
  readonly appName: string;
  version: number;
};

const cfg: config = {
  appName: "king",
  version: 123,
};

// cfg.appName= "chai or code" 