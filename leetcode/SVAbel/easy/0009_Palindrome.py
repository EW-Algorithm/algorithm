class Solution:
    def isPalindrome(self, x: int) -> bool:
        a=""
        for i in reversed(str(x)):
            try:
                if isinstance(int(i), int) == True:
                    a += i
            except:
                return False

        if int(a) == x:
            return True
        else:
            return False
