function makeChai(type: string, cups: number) {
  console.log(`making ${cups} cups o ${type}`);
}
makeChai("masala", 2);

function getChaiPrice(): number {
  return 25;
}

function makeOrder(order: string) {
  if (!order) return null;
  return order;
}

// logger function

function logChai(): void {
  console.log("chai is readyd");
}

// optional parameter default parameter

function orderChai(type?: string) {}

//  default parameter
function orderChai2(type: string = "Masala") {}

function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 45;  
}
