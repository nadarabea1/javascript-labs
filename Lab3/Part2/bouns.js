var shape=prompt("Enter Shape")
switch(shape.toLowerCase()){
    case 'circle':
        circle()
        break;
    case 'triangle':
        triangle()
        break;
    case 'square':
        square()
        break;
    case 'rectangle':
        rectangle()
        break;
    case 'parallelogram':
        parallelogram()
        break;
    case 'trapezium':
        trapezium()
        break;
    case 'ellipse':
        Ellipse()
        break;
}
function circle(){
    let r=prompt("Enter radius")
    document.write(`Area = ${r*r*3.14}`)
}
function triangle(){
    let b=prompt("Enter base")
    let h=prompt("Enter height")
    document.write(`Area = ${b*h/2}`)
}

function square(){
    let l=prompt("Enter length")
    document.write(`Area = ${l*l}`)
}
function parallelogram(){
    let b=prompt("Enter base")
    let h=prompt("Enter height")
    document.write(`Area = ${b*h}`)
}
function trapezium(){
    let a=Number(prompt("Enter side1"))
    let b=Number(prompt("Enter side2"))
    let h=prompt("Enter height")
    document.write(`Area = ${(a+b)/2*h}`)
}

function Ellipse(){
    let a=prompt("Enter side1")
    let b=prompt("Enter side2")
    document.write(`Area = ${(a/2)*(b/2)*3.14}`)
}
