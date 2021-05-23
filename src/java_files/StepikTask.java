package java_files;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.math.BigInteger;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

public class StepikTask {

    public static Scanner sc = new Scanner(System.in);

    public static void main(String[] args) {
//        rotateArray();
//        lessThenNumber();
//        countOfWords();
//        dividedNuts();
//        arithmeticProgression();
//        tableMultiplication();
//        System.out.println(doubleFactorial());
//        longestWordInString();
//        gradeOfStudents();
//        twoBoxes();
//        countOfNumbersLessThen();
//        cinemaSeats();
//        sumOfGivenNumbers();
//        luckyTicket();
//        romanNumbers();
//        snow();
//        sumOfEvenNumbers();
//        nextEvenNumber();
//        annSleepingSchedule();
//        entryInput();
        queueWork();
    }


    public static void countOfSomething() {
        int larger, smaller, perfect;
        larger = smaller = perfect = 0;

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(System.in))) {
            int size = Integer.parseInt(reader.readLine());
            for (int i = 0; i < size; i++) {
                String evaluation = reader.readLine();
                switch (evaluation) {
                    case "0":
                        perfect++;
                        break;
                    case "1":
                        larger++;
                        break;
                    case "-1":
                        smaller++;
                        break;
                }
            }
        } catch (IOException ioe) {
            System.err.println(ioe.getMessage());
        }
        System.out.println(perfect + " " + larger + " " + smaller);
    }

    public static void rotateArray() {
        String[] size = sc.nextLine().split(" ");
        int n = Integer.parseInt(size[0]);
        int m = Integer.parseInt(size[1]);
        String[][] array = new String[n][m];
        String[][] res = new String[m][n];

        for (int i = 0; i < n; i++) {
            array[i] = sc.nextLine().split(" ");
        }

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                res[i][j] = array[n - 1 - j][i];
                System.out.print(res[i][j] + " ");
            }
            System.out.println();
        }
    }

    public static void lessThenNumber() {
        int number = sc.nextInt();
        int base = 1;
        while (base < number) {
            System.out.println(base);
            base <<= 1;
        }
    }

    public static void countOfWords() {
        String text = sc.nextLine();
        Arrays.stream(text.split(" "))
                .map(String::toLowerCase)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
                .forEach((key, value) -> System.out.println(key + " " + value));
    }

    public static void dividedNuts() {
        int n = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(k / n);
    }

    public static void arithmeticProgression() {
        String[] nums = sc.nextLine().split(" ");
        boolean flag = true;
        List<Integer> sortedNums = Arrays.stream(nums).map(Integer::parseInt).sorted().collect(Collectors.toList());
        for (int i = 1; i < sortedNums.size() - 1; i++) {
            if (sortedNums.get(i) - sortedNums.get(i - 1) != sortedNums.get(i + 1) - sortedNums.get(i)) {
                System.out.println("No");
                flag = false;
                break;
            }
        }
        if (flag) {
            System.out.println("Yes");
        }
    }

    public static void tableMultiplication() {
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int d = sc.nextInt();
        System.out.print("\t");
        for (int i = c; i <= d; i++) {
            System.out.print(i + "\t");
        }
        System.out.println();
        for (int i = a; i <= b; i++) {
            System.out.print(i + "\t");
            for (int j = c; j <= d; j++) {
                System.out.print(i * j + "\t");
            }
            System.out.println();
        }
    }

    public static BigInteger doubleFactorial() {
        int n = sc.nextInt();
        int base;
        BigInteger res = BigInteger.ONE;
        if (n % 2 != 0) {
            base = 1;
        } else {
            base = 2;
        }
        for (int i = 0; i < n; i += 2) {
            res = res.multiply(BigInteger.valueOf(base + i));
        }
        return res;
    }

    public static void longestWordInString() {
        String[] words = sc.nextLine().split(" ");
        int countOfChar = 0;
        for (String s : words) {
            if (s.length() > countOfChar) {
                countOfChar = s.length();
            }
        }
        for (String word : words) {
            if (word.length() == countOfChar) {
                System.out.println(word);
                break;
            }
        }
    }

    public static void gradeOfStudents() {
        int A, B, C, D;
        A = B = C = D = 0;
        int n = sc.nextInt();
        for (int i = 0; i < n; i++) {
            switch (sc.nextInt()) {
                case 5:
                    A++;
                    break;
                case 4:
                    B++;
                    break;
                case 3:
                    C++;
                    break;
                case 2:
                    D++;
                    break;
            }
        }
        System.out.println(D + " " + C + " " + B + " " + A);
    }

    public static void twoBoxes() {
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        int[] vol = new int[3];
        vol[0] = a;
        vol[1] = b;
        vol[2] = c;

        int a1 = sc.nextInt();
        int b1 = sc.nextInt();
        int c1 = sc.nextInt();
        int[] vol1 = new int[3];
        vol1[0] = a1;
        vol1[1] = b1;
        vol1[2] = c1;

        Arrays.sort(vol);
        Arrays.sort(vol1);

        if (vol[0] == vol1[0] && vol[1] == vol1[1] && vol[2] == vol1[2]) {
            System.out.println("Boxes are equal");
        } else if (vol[0] >= vol1[0] && vol[1] >= vol1[1] && vol[2] >= vol1[2]) {
            System.out.println("The first box is larger than the second one");
        } else if (vol[0] <= vol1[0] && vol[1] <= vol1[1] && vol[2] <= vol1[2]) {
            System.out.println("The first box is smaller than the second one");
        } else {
            System.out.println("Boxes are incomparable");
        }
    }

    public static int sumOfNumbers(String n) {
        return Arrays.stream(n.split(""))
                .map(Integer::parseInt)
                .reduce(0, Integer::sum);
    }

    public static void countOfNumbersLessThen() {
        String n = sc.nextLine();
        int counter = 0;
        int base = sumOfNumbers(n);
        for (int i = 0; i < Integer.parseInt(n); i++) {
            if (sumOfNumbers(String.valueOf(i)) == base) {
                counter++;
            }
        }
        System.out.println(counter);
    }

    public static void cinemaSeats() {
        String[] dimensions = sc.nextLine().split(" ");
        int n = Integer.parseInt(dimensions[0]);
        int m = Integer.parseInt(dimensions[1]);
        List<Integer> res = new ArrayList<>();
        int[][] seats = new int[n][m];
        boolean flag = true;
        for (int i = 0; i < n; i++) {
            String[] row = sc.nextLine().split(" ");
            for (int j = 0; j < row.length; j++) {
                seats[i][j] = Integer.parseInt(row[j]);
            }
        }
        int countOfSeats = sc.nextInt();
        for (int i = 0; i < seats.length; i++) {
            int temp = 1;
            for (int j = 0; j < seats[i].length - 1; j++) {
                if (seats[i][j] == 0 && seats[i][j + 1] == 0) {
                    temp++;
                    if (temp == countOfSeats) {
                        res.add(i + 1);
                        flag = false;
                        break;
                    }
                } else {
                    temp = 1;
                }
            }
        }
        Collections.sort(res);
        if (flag) {
            System.out.println(0);
        } else {
            System.out.println(res.get(0));
        }
    }

    public static void sumOfGivenNumbers() {
        String[] numbers = sc.nextLine().split(" ");
        int sum = 0;
        for (String number : numbers) {
            try {
                sum += Integer.parseInt(number);
            } catch (NumberFormatException nfe) {
                continue;
            }
        }
        System.out.println(sum);
    }

    public static void luckyTicket() {
        List<Integer> digits = Arrays.stream(sc.nextLine().split(""))
                .map(Integer::parseInt)
                .collect(Collectors.toList());
        int sumLeft = 0;
        int sumRight = 0;
        for (int i = 0; i < digits.size() / 2; i++) {
            sumLeft += digits.get(i);
            sumRight += digits.get(digits.size() - i - 1);
        }
        if (sumLeft == sumRight) {
            System.out.println("Lucky");
        } else {
            System.out.println("Regular");
        }
    }

    public static void romanNumbers() {
        String[] romanDigits = sc.nextLine().split("");

        Map<String, Integer> digits = new HashMap<>();
        digits.put("I", 1);
        digits.put("V", 5);
        digits.put("X", 10);
        digits.put("L", 50);
        digits.put("C", 100);
        digits.put("D", 500);
        digits.put("M", 1000);
        int res = 0;
        int counter = 0;
        for (int i = romanDigits.length - 1; i > 0; i--) {
            int cur = digits.get(romanDigits[i]);
            int next = digits.get(romanDigits[i - 1]);
            if (cur > next) {
                res += cur - next;
                i--;
                counter++;
            } else {
                res += cur;
            }
        }
        res += digits.get(romanDigits[0]);

        System.out.println(res);
    }

    public static void snow() {
        int n = sc.nextInt();
        char[][] matrix = new char[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i == n / 2 || j == n / 2 || i == j || i == n - 1 - j) {
                    matrix[i][j] = '*';
                } else {
                    matrix[i][j] = '.';
                }
            }
        }

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                System.out.print(matrix[i][j]);
            }
            System.out.println();
        }
    }

    public static void sumOfEvenNumbers() {
        List<Integer> evenNums = Arrays.stream(sc.nextLine().split(" "))
                .map(Integer::valueOf).collect(Collectors.toList());
        int sum = 0;
        for (int i = 0; i < evenNums.size(); i += 1) {
            if (i % 2 != 0) {
                System.out.println(evenNums.get(i));
            }
            if (evenNums.get(i) % 2 == 0) {
                sum += evenNums.get(i);
            }
        }
        System.out.println(sum);
    }

    public static void nextEvenNumber() {
        int n = sc.nextInt();
        System.out.println(n % 2 == 0 ? n + 2 : n + 1);
    }

    public static void annSleepingSchedule() {
        int A = sc.nextInt();
        int B = sc.nextInt();
        int H = sc.nextInt();
        System.out.println();
        if (H < A) {
            System.out.println("Deficiency");
        } else if (H > B) {
            System.out.println("Excess");
        } else {
            System.out.println("Normal");
        }
    }

    public static void entryInput() {
        Map<String, Integer> map = new TreeMap<>();
        map.put("Gamma", 3);
        map.put("Omega", 24);
        map.put("Alpha", 1);
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + "=" + entry.getValue());
        }
    }

    public static void queueWork(){
        Deque<Integer> queue = new ArrayDeque<>(Arrays.asList(1,2,3,4));
        queue.add(5);
        queue.poll();
        queue.poll();
        System.out.println(queue);

    }
}