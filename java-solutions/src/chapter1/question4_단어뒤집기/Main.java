package chapter1.question4_단어뒤집기;

import java.util.Scanner;

public class Main {
    public static String[] solution(String[] inputs) {
        String[] reversedInputs = new String[inputs.length];

        for (int i = 0; i < inputs.length; i++) {
            char[] charArray = inputs[i].toCharArray();
            int left = 0;
            int right = charArray.length - 1;

            while (left < right) {
                char temp = charArray[left];
                charArray[left] = charArray[right];
                charArray[right] = temp;
                left++;
                right--;
            }

            reversedInputs[i] = new String(charArray);
        }

        return reversedInputs;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int amount = in.nextInt();
        in.nextLine(); // Consume the newline character

        String[] inputs = new String[amount];

        for (int i = 0; i < amount; i++) {
            inputs[i] = in.nextLine();
        }

        String[] results = solution(inputs);

        for (String result : results) {
            System.out.println(result);
        }
    }
}