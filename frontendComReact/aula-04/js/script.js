class Animal{
   constructor(nome){
      this.nome = nome
   }

   speak(){
      console.log(`${this.nome} falando...`)
   }
}

class Dog extends Animal{
   constructor(name, type){
      super(name)

      this.type = type
   }

   speak(){
      console.log(`${this.nome} (${this.type}) latindo...`)
   }
}

class Cat extends Animal{
   constructor(name, type){
      super(name)

      this.type = type
   }

   speak(){
      console.log(`${this.nome} (${this.type}) miando...`)
   }
}

const animal = new Animal('Totó')
const dog = new Dog('Luck', 'terrie')
const cat = new Cat('Maze', 'Frajola')

animal.speak()
dog.speak()
cat.speak()
   