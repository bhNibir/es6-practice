class Parents{
    constructor(){
        this.Fname = "Father Name"
    }

   taka() {
        return "Onek Taka"
    }
}

class Child extends Parents{
    constructor(name){
        super()
        this.name = name
    }
}

const baby1 = new Child("Nibir")

console.log(baby1.taka());
