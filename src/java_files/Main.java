package java_files;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;
import java.util.concurrent.ThreadFactory;

public class Main {

    public static void main(String[] args) {
        Person person = new Person("Mike","Sky", true, 25);
        Person person1 = new Person("Tina","Moore", false, 27);
        person.logPersonInfo();
        someMethod();
        threadFactoryMethod();
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
