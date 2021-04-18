package java_files;

public class Person {
    private String name;
    private String surName;
    private boolean isMarriage;
    private int age;

    public Person(){}

    public Person(String name, String surName, boolean isMarriage, int age) {
        this.name = name;
        this.surName = surName;
        this.isMarriage = isMarriage;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurName() {
        return surName;
    }

    public void setSurName(String surName) {
        this.surName = surName;
    }

    public boolean isMarriage() {
        return isMarriage;
    }

    public void setMarriage(boolean marriage) {
        isMarriage = marriage;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
