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

class Chai{
    public flavor: string = "Ginger"
    private secretIngredients="cardamom"

    reveal(){
        return this.secretIngredients // ok
    }
  
}

class shop{
      protected shopName= 'chai corner'
}

class Branch extends shop{
    getName(){
        return this.shopName
    }
}

// const c = new Chai()
// c.reveal()

new Branch().getName