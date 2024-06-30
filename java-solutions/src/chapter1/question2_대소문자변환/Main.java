package chapter1.question2_대소문자변환

-2_대소문자변환;

import java.util.*;
public class Main {

    public static String solution(String inputString){
        char [] inputStringCharArray = inputString.toCharArray();
        for(int i = 0; i < inputStringCharArray.length; i++){
            if(Character.isLowerCase(inputStringCharArray[i])){
                inputStringCharArray[i] = Character.toUpperCase(inputStringCharArray[i]);
            } else {
                inputStringCharArray[i] = Character.toLowerCase(inputStringCharArray[i]);
            }
            }
        return new String(inputStringCharArray);

    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String firstInput = input.nextLine();
        System.out.println(solution(firstInput));
    }
}