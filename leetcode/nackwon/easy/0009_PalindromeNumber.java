class Solution {
    public boolean isPalindrome(int x) {

        boolean bleCheck = false;

        String strNumber = String.valueOf(x);

        Stack<String> stack = new Stack<>();

        int intSize = strNumber.length();
        char[] chArray = strNumber.toCharArray();

        for (int i=0;i<intSize; ++i) {
            String strTmp = String.valueOf(chArray[i]);
            stack.push(strTmp);
        }
        String strReverse = "";
        for (int i=0;i<intSize; ++i) {
            strReverse = strReverse + stack.pop();
        }

        if (strReverse.equals(strNumber)) {
            bleCheck = true;
        } else {
            bleCheck = false;
        }
        return bleCheck;
    }
}
// 회귀 문자인지 아닌지 확인하는 문제
// 스택을 이용해서 문제 해결함.
// 스택은 후입선출이므로 pop했을 때 순서대로 제일 마지막에 들어간 내용부터 나옴
// 그렇게 나온 것과 처음 입력한 값과 같은지 비교 
