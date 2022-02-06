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