package java_files;

public class Cat extends Animal{
    private String color;
    public Cat(String name, int age, boolean hasTail) {
        super(name, age, hasTail);
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}