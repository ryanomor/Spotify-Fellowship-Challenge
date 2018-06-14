/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string. 

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer. 

For s = "4[ab]", the output should be decodeString(s) = "abababab" 
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

var sortByStrings = function (s, t) {
    let result = "",
        strObj = {};

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
    // for (let char of s) {
    //   char = char.toLowerCase();
    //     if(strObj[char]) {
    //       strObj[char.toUpperCase()] = 1;
    //     } else {
    //       strObj[char] = 1;
    //     }
    //   }
    // console.log(strObj);

    // for (let char of t) {
    //   char = char.toLowerCase();
    //   if(strObj[char]) {
    //     result += char;
    //   }
    // }
    return result;
}

sortByStrings("weather", "therapyw"); // returns "theeraw"
sortByStrings("good", "odg"); // returns "oodg"

var decodeString = function (s) {
    let iterations = [],
        encoded = [],
        numbers = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9"},
        temp = "",
        result = "";

    for (let i = 0; i < s.length; i++) {
        let counter;
        if (s[i] === "[") {
            // create the iterations list
            counter = i - 1;
            let numberString = "";
            while (counter >= 0) {
                if (s[counter] === "[") {
                    iterations.push(Number(numberString));
                    numberString = "";
                    break;
                }
                let number = numbers[Number(s[counter])];
                
                if (number) {
                    numberString = number + numberString;
                }

                if (counter === 0 && number) {
                    iterations.push(Number(numberString));
                    numberString = "";
                }
                counter--;
            }

            // create the encodedString list
            counter = i + 1;
            let encodedString = "";
            while (counter < s.length) {
                if (s[counter] === "]" || numbers[Number(s[counter])]) {
                    encoded.push(encodedString);
                    encodedString = "";
                    break;
                }
                if (!numbers[s[counter]]) {
                    encodedString += s[counter];
                } 
                counter++;
            }
        }
    }

    for (let i = iterations.length - 1; i >= 0; i--) {
        let iteration = iterations[i];
        let currString = encoded[i];
        let newString = "";

        while (iteration > 0) {
            newString += currString;
            if (iteration === 1 && i > 0) {
                temp = encoded[i - 1];
                newString = temp + newString;
                encoded[i - 1] = newString;
            } else if (iteration === 1 && i === 0) {
                return newString;
            }
            iteration--;
        }
    }
}

console.log(decodeString("4[ab]")) // returns abababab

console.log(decodeString("2[b3[a]]")) // returns baaabaaa