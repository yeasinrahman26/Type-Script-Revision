// class Chai {
//   name: string;
//   price: number;

// //   constructor(name: string, price: number) {
// //     this.name = name;
// //     this.price = price;
// //   }

//   constructor(name: string) {
//     this.name = name;
//     console.log(this)
//   }
// }

// const masalaChai = new Chai("ginger");
// masalaChai.name = "ginger";

//access modifier

class Chai {
  public flavor: string = "Ginger";
  private secretIngredients = "cardamom";

  reveal() {
    return this.secretIngredients; // ok
  }
}

class shop {
  protected shopName = "chai corner";
}

class Branch extends shop {
  getName() {
    return this.shopName;
  }
}

// const c = new Chai()
// c.reveal()

new Branch().getName;

class Wallet {
  #balance = 100;
  getBalance() {
    return this.#balance;
  }
}

const w = new Wallet();

class Cup {
  readonly capacity: number = 200;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// getter and setters
class ModernChai {
  private _sugar = 2;

  get sugar() {
    return this._sugar;
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("too Sweet");
    this._sugar = value;
  }
}

// uses of getter and setters

const c = new ModernChai();
c.sugar = 3;

class EKChai{
    static shopName= "chaiCode Cafe"
    constructor(public flavor:string){}
}
console.log(EKChai.shopName) 

// last time stamp  3 hour 15 m 