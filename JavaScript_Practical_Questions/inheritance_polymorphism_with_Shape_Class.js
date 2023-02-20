class Shape_Class {

    constructor(colour = "Black") {
        this.colour = colour;
        this.shape_type = "Shape";
    }
  
    color_and_shape_type(){
        console.log(`${this.colour} --- ${this.shape_type}`);
    }
}

class Square_Shape_Class extends Shape_Class {
    
    constructor(colour, sideLength) {
        super(colour);
        this.sideLength = sideLength;
        this.shape_type = "Square";
    }

    area_method() {
        return this.sideLength * this.sideLength;
    }
}

class Rectangle_Shape_Class extends Shape_Class {
    
    constructor(colour, width, height) {
        super(colour);
        this.width = width;
        this.height = height;
        this.shape_type = "Rectangle";
    }
  
    area_method() {
        return this.width * this.height;
    }
}

  
const Square_Shape_Class_Object = new Square_Shape_Class("Red", 10);
const Rectangle_Shape_Class_Object = new Rectangle_Shape_Class("Yellow", 10 , 20);
console.log(Square_Shape_Class_Object.area_method());
console.log(Rectangle_Shape_Class_Object.area_method());
[Square_Shape_Class_Object , Rectangle_Shape_Class_Object].forEach(function (objects){
    objects.color_and_shape_type();
});