package java_files;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;
import java.util.concurrent.ThreadFactory;

public class Main {

    public static void main(String[] args) {
        Person person = new Person("Mike","Sky", true, 25);
        Person person1 = new Person("Tina","Moore", false, 27);
//        person.logPersonInfo();
//        someMethod();
//        threadFactoryMethod();

        Animal animal = new Cat("Tihon", 13, true);
        Cat cat = new Cat("Felix",15, true);
//        cat.setColor("Black&White");
//        System.out.println(cat.getColor());

        new Main().method();
    }

    public void method(){
        int i = 0;
        int j = 5;
        int k = 10;
        int loop = 0;
        while ((i++ < j) | (j < --k)){
            loop++;
        }
        System.out.println(loop);
    }


    private static void someMethod() {
        Thread t = new Thread(() -> {
            System.out.println("After someMethod");
        });
        try {
            Thread.currentThread().sleep(4000);
            t.start();
        }catch (InterruptedException ie){
            System.err.println(ie.getMessage());
        }

    }

    private static void threadFactoryMethod(){
        ExecutorService service = Executors.newFixedThreadPool(3);
        for (int i = 0; i < 3; i++) {
            int finalI = i;
            service.submit(new FutureTask<>(() -> String.valueOf(finalI)));
        }
    }
}
