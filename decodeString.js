/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.
 The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.
 
 For s = "4[ab]", the output should be decodeString(s) = "abababab"
 For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

var decodeString = function(s) {
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
                    break;
                }
                let number = numbers[Number(s[counter])];
                
                if (number) {
                    numberString = number + numberString;
                }

                if (counter === 0 && number) {
                    iterations.push(Number(numberString));
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

    // decode the strings
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

decodeString("4[ab]"); // returns abababab
decodeString("2[b3[a]]"); // returns baaabaaa