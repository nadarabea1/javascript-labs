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
var square=new Shape("square", 4, 5)
square.calcPerimeter()
var triangle=new Shape("triangle", 3, 3)
triangle.calcPerimeter()
