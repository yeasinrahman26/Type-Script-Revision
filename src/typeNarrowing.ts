{
  /**
   */
}

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `The kind of chai is ${kind}`;
  }
  return `chai order : ${kind}`;
}

console.log(getChai("Ginger tea"));

// trueness
function serveChai(msg?: string) {
  if (msg) {
    return `serving ${msg}`;
  }
  return `serving default chai`;
}

console.log(serveChai("Milk tea"));

function orderChai(size: "small" | "medium" | number) {
  if (size === "medium" || size === "small") {
    return `${size} is serving`;
  }
  return ` total ${size} Chai is serving`;

  //   if (typeof size === "number") {

  //   }
}

console.log(orderChai(5));

class KulhadChai {
  server() {
    return "serving kulhad chai";
  }
}
class CuttingChai {
  server() {
    return "serving CuttingChai chai";
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.server();
  }
}

type ChaiOrder = {
  type: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar} sugar cubes`;
  }
  return `serving custom chai: ${item}`;
}

type MilkChai = { type: "milk"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type CardamomChai = { type: "cardamom"; aroma: number };

type Chai = MilkChai | GingerChai | CardamomChai;

function chaiType(order: Chai) {
  switch (order.type) {
    case "milk":
      return `Milk Tea`;
      break;
    case "cardamom":
      return "Cardamom tea is serving";
      break;
    case "ginger":
      return `Ginger tea is serving`;
      break;
  }
}

function brew(order: MilkChai | GingerChai) {
  if ("spiceLevel" in order) {
    return `this is the Milk Tea`;
  }
}



// timeStamp 1 hour 23 minute 58s