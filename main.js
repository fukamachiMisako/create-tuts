class Car {
    constructor(merek, warna, harga) {
        this.merek = merek
        this.warna = warna
        this.harga = harga
    }

    set setMerek (merek){
        this.merek = merek
    }

    get getMerek(){
        return this.merek;
    }

    startEngine(){
        return this.engine = true;
    }

    stopEngine(){
        return this.engine = false;
    }

    set price(harga){
        this.harga = harga
    }

    get price(){
        return this.price;
    }
  
    set color(warna){
        this.warna = warna;
    }

    get color(){...
        return this.warna;
    }

}


const jazz = new Car('Honda', 'Hitam', 2999);
const fiesta = new Car('Ford', 'red', 2331);
const alvanza = new Car('Toyota', 'Ungu', 1200);

const mobilio = new Car('Honda', 'white', 1000)
