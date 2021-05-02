package java_files;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class StepikTask {

    public static void main(String[] args) {
        int larger, smaller, perfect;
        larger = smaller = perfect = 0;

        try(BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))){
            int size = Integer.parseInt(reader.readLine());
            for (int i = 0; i < size; i++) {
                String evaluation = reader.readLine();
                switch (evaluation){
                    case "0": perfect++; break;
                    case "1": larger++; break;
                    case "-1": smaller++; break;
                }
            }
        }catch (IOException ioe){
            System.err.println(ioe.getMessage());
        }
        System.out.println(perfect + " " + larger + " " + smaller);
    }
}
