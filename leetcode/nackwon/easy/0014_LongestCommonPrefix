/*
* Runtime : 30.54%
* Memory  : 16.14%
*/
class Solution {
    public String longestCommonPrefix(String[] strs) {
        int intSize = strs.length;

        char[] chTmpCommon = new char[]{};
        for (int i=0;i<intSize; ++i) {
            String strTmp = strs[i];

            char[] chArray = strTmp.toCharArray();

            if(chTmpCommon.length == 0) {
                chTmpCommon = chArray.clone();
            }

            int intSize1 = Math.min(chTmpCommon.length, strTmp.length());

            char[] chCommon = new char[intSize1];
            if (strTmp.length() > 0) {
                for (int j=0;j<intSize1; ++j) {

                    if (chTmpCommon[j] == chArray[j]) {
                        chCommon[j] = chTmpCommon[j];
                    } else {
                        chTmpCommon = chCommon.clone();
                        break;
                    }

                    if (j == intSize1-1) {
                        chTmpCommon = chCommon.clone();
                    }
                }
            } else {
                return "";
            }

        }
        return new String(chTmpCommon).trim();
    }
}

// 배열에 들어온 문자 중 앞에서부터 공통 문자를 리턴하는 문제
// 1. 첫 문장을 A 배열에 넣는다.
// 2. A 배열과 B배열 문장을 비교 후 같은 문자만 새로운 배열(C)에 넣는다
// 2-1 A 배열과 B 배열의 문장 길이 비교 후 작은 길이의 배열까지만 비교
// 3. 비교 완료 후 C 배열의 값을 A 배열에 Clone
// 4. 2,3 번 진행
