function sortByStrings(s,t) {
    let result = "";
  
    for(let i = 0; i < t.length; i++) {
      let char = t[i];
      let counter = 0;
      while(counter < s.length) {
        if (s[counter] === char) {
          result += char;
        }
        counter++;
      }
    }
    return result;
  }
  
  sortByStrings("weather", "therapyw"); // returns "theeraw"
  sortByStrings("good", "odg"); // returns "oodg"