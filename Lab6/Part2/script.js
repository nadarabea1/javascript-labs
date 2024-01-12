class Shape{
    constructor(name, sides, lengthSides){
        this.name=name || "shape"
        this.sides=sides || 0
        this.lengthSides=lengthSides || 0
    }
     calcPerimeter(){
        console.log(`Perimeter ${this.name}: ${(this.sides) * (this.lengthSides)}`)
    }
}
class Square extends Shape{
    constructor(lengthSides){
        super("square", 4, lengthSides)
    }
    calcArea(){
        console.log(`Area Square: ${this.lengthSides*this.lengthSides}`)
    }
}
var square=new Square(5)
square.calcPerimeter()
square.calcArea()