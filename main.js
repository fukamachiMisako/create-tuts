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
}