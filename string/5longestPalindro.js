//start check from the middle of the string
//expand the palindrome from the middle to the left and right
//odd palindrome: l,r=i,i expand from the middle to the left and right
//even palindrome: l,r=i,i+1 expand from the middle to the left and right
//compare the length of the palindrome with the current longest length

var longestPalindrome = function (s) {
  let result = "";
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    //odd palindrome
    let l = i;
    let r = i;
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      if (r - l + 1 > longest) {
        longest = r - l + 1;
        result = s.substring(l, r + 1);
      }
      l--;
      r++;
    }

    //even palindrome
    l = i;
    r = i + 1;
    while (l >= 0 && r < s.length && s[l] == s[r]) {
      if (r - l + 1 > longest) {
        longest = r - l + 1;
        result = s.substring(l, r + 1);
      }
      l--;
      r++;
    }
  }
  return result;
};
