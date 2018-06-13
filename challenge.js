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

        // for (let i = 0; i < s.length; i++) {
        //     let count = 0;
        //     // Check if current character is number and push number into iterations arr
        //     if (numbers[Number(s[i])]) {
        //         while (numbers[Number(s[i])]) {
        //             count = count * 10 + s[i] - "0";
        //             i++;
        //         }
        //         i--;
        //         iterations.push(count);
        //     } else if (s[i] === ']') {
        //         // current character is ']', pop from encoded until '[' is out
        //         temp = "";
        //         count = 0;
        //         if (iterations.length > 0) {
        //             count = iterations[iterations.length - 1];
        //             iterations.pop();
        //         }
        //         while (encoded.length > 0 && encoded[encoded.length - 1] !== '[') {
        //             temp = encoded[encoded.length - 1] + temp;
        //             encoded.pop();
        //         }
        //         if (encoded.length > 0 && encoded[encoded.length - 1] === '[') {
        //             encoded.pop();
        //         }
        //         // Repeating the popped string 'temp' count number of times.
        //         for (let j = 0; j < count; j++){
        //             result = result + temp;
        //         }
      
        //         // Push to character stack.
        //         for (let j = 0; j < result.length; j++) {
        //             encoded.push(result[j]);
        //         }
      
        //         result = "";
        //     } else if (s[i] === '[') {
        //         if (numbers[Number(s[i - 1])]) {
        //             encoded.push(s[i]);
        //         } else {
        //             encoded.push(s[i]);
        //             iterations.push(1);
        //         }
        //     } else {
        //         encoded.push(s[i]);
        //     }
        //     // Pop all the elmenet, make a string and return.
        //     while (encoded.length > 0) {
        //         result = encoded[encoded.length - 1] + result;
        //         encoded.pop();
        //     }
        
        // }
        // return result;

    for (let i = 0; i < s.length; i++) {
        let counter;
        if (s[i] === "[") {
            counter = i - 1;
            let numberString = "";
            while (counter >= 0) {
                let number = numbers[Number(s[counter])];
                
                if (number) {
                    numberString = number + numberString;
                } else {
                    iterations.push(Number(numberString));
                    break;
                }
                counter--;
                console.log(numberString);
            }

            // counter = i + 1;
            // let string = "";
            // while (counter < s.length) {

            //     if (isNaN(s[counter])) {
            //         string += s[counter];
            //     } else {
            //         encoded.push(string);
            //         string = "";
            //         break;
            //     }
            //     counter++;
            // }
        }
        // if (s[0] == "]") return;
        // if (isNaN(Number(s[0]))) {
        //   return decodeString(s.slice(1, s.length - 1));
        // }

    }
    // return { iterations: iterations, encoded: encoded };
}

console.log(decodeString("4[ab]")) // returns abababab

console.log(decodeString("23[b3[a]]")) // returns baaabaaa