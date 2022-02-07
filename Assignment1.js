//problem:1
function anaToVori(ana) {
    // Checking the input is positive number or not.
    if ((typeof (ana) == "string") || ana < 0) {
        return "Invalid input value! Put positive number. You might have given negative numbers or strings!"
    }
    //If the input is positive number then do the operation.
    else {
        const vori = ana / 16;
        return vori;
    }

}
// Calling the function
const calculatedVoriValue = anaToVori(48);
console.log(calculatedVoriValue);

//problem:2
function pandaCost(singara, somucha, jilapi) {
    //Checking whether the inputs are positive integer number or not.
    if ((typeof (singara) == "string" || typeof (somucha) == "string" || typeof (jilapi) == "string") || (singara < 0 || somucha < 0 || jilapi < 0) || (Math.round(singara) - singara != 0 || Math.round(somucha) - somucha != 0 || Math.round(jilapi) - jilapi != 0)) {
        return "Invalid input value! Put positive and integer number. You might have given negative or float numbers or strings!"
    }
    //If the inputs are positive integer number then do the operation.
    else {
        const totalCost = singara * 7 + somucha * 10 + jilapi * 15;
        return totalCost;
    }
}
// Calling the function.
const totalCalculatedCost = pandaCost(2, 2, 2);
console.log(totalCalculatedCost);

//problem:3
function picnicBudget(participents) {
    //Checking whether the inputs are positive integer number or not. If someone give float number it will not be excepted.
    if ((typeof (participents) == "string") || participents < 0 || Math.round(participents) - participents != 0 /* participents % 1 != 0 */) {
        return "Invalid input value! Put positive and integer number. You might have given negative or float numbers or strings!"
    }
    //If the inputs are positive integer number then do the operation.
    else {
        if (participents <= 100) {
            let HundredCost = participents * 5000;
            return HundredCost;
        }
        else if (participents <= 200) {
            let twoHundredCost = (participents - (participents - 100)) * 5000;
            let twoHundredRestCost = (participents - 100) * 4000;
            return twoHundredCost + twoHundredRestCost;
        }
        else if (participents > 200) {
            let threeHundredFirstCost = (participents - (participents - 100)) * 5000;
            let threeHundredSecondCost = (participents - (participents - 100)) * 4000;
            let threeHundredRestCost = (participents - 200) * 3000;
            return threeHundredFirstCost + threeHundredSecondCost + threeHundredRestCost;

        }
    }
}
// Calling the function.
const totalBudget = picnicBudget(160);
console.log(totalBudget);

// problem:4
let friends = ["12", "ratul", "rakib", "Snigdho", "akash"];
function oddFriend(friends) {
    // Declearing an empty array.
    let odd = [];
    // Loop until the last element.
    for (let i = 0; i < friends.length; i++) {
        // Checking whether the inputs are string or not. If someone put number as string, it will not be excepted.
        if (typeof (friends[i]) == "string" && (friends[i] % 1) != 0) {
            // Checking whether length of the inputs are odd or not.
            if (friends[i].length % 2 == 1) {
                odd.push(friends[i]);
            }
        }
        //If the inputs are not string then do the operation.
        else {
            return "Invalid input value! Put names(String). You might have given numbers!"
        }
    }
    return odd[0];
}
// Calling the function.
const allFriends = oddFriend(friends);
console.log(allFriends);