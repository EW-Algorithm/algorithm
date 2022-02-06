class Solution {
    public int romanToInt(String s) {
        int intResult = 0;

        if (s.contains("IV")) {
            s = s.replaceAll("IV", "");
            intResult = intResult + 4;
        }
        if (s.contains("IX")) {
            s = s.replaceAll("IX", "");
            intResult = intResult + 9;
        }
        if (s.contains("XL")) {
            s = s.replaceAll("XL",  "");
            intResult = intResult + 40;
        }
        if (s.contains("XC")) {
            s = s.replaceAll("XC", "");
            intResult = intResult + 90;
        }
        if (s.contains("CD")) {
            s = s.replaceAll("CD", "");
            intResult = intResult + 400;
        }
        if (s.contains("CM")) {
            s = s.replaceAll("CM", "");
            intResult = intResult + 900;
        }

        int intSize = s.length();
        for (int i=0;i<intSize; ++i) {
            char[] chArray = s.toCharArray();

            intResult = intResult + returnRomanNumber(String.valueOf(chArray[i]));

        }
        return intResult;
    }


    /**
     * 문자 입력 시 매핑되는 숫자
     * @param strSymbol
     * @return
     */
    public static int returnRomanNumber(String strSymbol) {

        switch (strSymbol) {
            case "I" :
                return 1;
            case "V" :
                return 5;
            case "X" :
                return 10;
            case "L" :
                return 50;
            case "C" :
                return 100;
            case "D" :
                return 500;
            case "M" :
                return 1000;
        }
        return 0;
    }
}


// 로마 문자를 현재 숫자로 변경해서 숫자 구하는 문제
// 더 하면 끝이지만 로마 문자 중 특별한 두개는 다른 숫자를 나타냄
// 1. 특별한 문자 두개는 빈 값으로 치환
// 2. 그 문자에 맞는 숫자 result 값에 추가
// 3. 1 ~ 2 반복 후 없으면 나머지 로마 문자 숫자로 치환
// 4. 모두 더함.
