let moto1 = new Moto("Preta", "GSX R 750", "Suzuki");
let comprador1 = new Comprador("Jonas", 30, "100100-010-10");
let moto2 = new Moto("Vinho", "XJ6", "Yamaha");
let comprador2 = new Comprador("Pedro", 23, "111111-111-11");

console.log(comprador1.infocomprador() + moto1.infomoto());
console.log(comprador2.infocomprador() + moto2.infomoto());