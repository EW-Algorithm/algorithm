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