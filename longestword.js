function findLongestWord(str) {
  var newArr = str.split(' ');
  var maxVal = 0;
  for (var i = 0; i < newArr.length; i++){
    if(newArr[i].length > maxVal){
      maxVal = newArr[i].length;
    }
  }
  return maxVal;
}

findLongestWord("What if we try a super-long word such as otorhinolaryngology");
