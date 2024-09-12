class Solution:
    def isPalindrome(self, x:int)->bool:
        reverse=0
        original=x
        
        if  x<0:
            return False
       
        while x>0:
            reverse=reverse*10+x%10
            x=x//10
        
        return reverse==original
    
    
sol=Solution();
print(f"result: {sol.isPalindrome(121)}")
        
