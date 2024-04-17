class Animal {
    constructor(specie,age,color){
        this.specie = specie;
        this.age = age;
        this.color = color;
        this.info = `I'm a ${this.specie}, I'm ${this.age} years old and I'm ${this.color}.<br>`
    }
    viewInfo(){
        document.write(this.info + "<br><br>")
    }
}

class Dog extends Animal{
    constructor(specie,age,color,breed){
        super(specie,age,color);
        this.breed = breed;
    }
    viewInfo(){
        document.write(`${this.info} My breed is ${this.breed}. <br><br>`)
    }
}



let dog = new Dog("dog",5,"brown","Doberman");
let cat = new Animal("cat",1,"grey");
let parrot = new Animal("parrot",15,"green");



/* document.write(dog.info)
document.write(cat.info)
document.write(parrot.info) */

dog.viewInfo();
cat.viewInfo();
parrot.viewInfo();