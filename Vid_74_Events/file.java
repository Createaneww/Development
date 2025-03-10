interface Shape {
    double calculateArea();
    double calculatePerimeter();
}

class Circle implements Shape {
    double radius;
    Circle(double radius) { this.radius = radius; }
    public double calculateArea() { return Math.PI * radius * radius; }
    public double calculatePerimeter() { return 2 * Math.PI * radius; }
}

class Rectangle implements Shape {
    double length, width;
    Rectangle(double length, double width) { this.length = length; this.width = width; }
    public double calculateArea() { return length * width; }
    public double calculatePerimeter() { return 2 * (length + width); }
}

public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle(5);
        Shape rectangle = new Rectangle(4, 6);
        System.out.println("Circle Area: " + circle.calculateArea());
        System.out.println("Rectangle Area: " + rectangle.calculateArea());
    }
}