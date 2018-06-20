/*
 Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. 
                You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", 
                the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", 
                the output should be sortByString(s, t) = "oodg".
 */

var sortByStrings = function (s, t) {
    let result = "";

    for (let i = 0; i < t.length; i++) {
        let char = t[i];
        let counter = 0;
        while (counter < s.length) {
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