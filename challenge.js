/*
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
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

var changePossibilities = function(amount, denominations) {
    let count = 0;
    const denominationValues = {};

    for (let denomination of denominations) {
        denominationValues[denomination] = denomination;
    }
    
        
    for (let i = 0; i < denominations.length; i++) {
        let loop = true,
            newAmount = amount,
            denomination = denominations[i];
        while (loop) {
            newAmount -= denomination;
            if (newAmount < 0) {
                loop = false;
            } else if (newAmount === 0) {
                count += 1;
            } 
            if (denominationValues[newAmount] && newAmount === denominationValues[newAmount]) {
                newAmount -= newAmount;
                count += 1;
            }
        }
    }
    return count;
}

console.log(changePossibilities(4, [1, 2, 3])); // returns 4
console.log(changePossibilities(10, [2, 5, 3, 6])); // returns 5