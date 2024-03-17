const readline = require("readline");
let letters = target = "ABCDEFGHIJKLMNOP".split("");
let moves = 0;
letters = shuffle(letters);

const main = async () => {
    while (true) {
        while (check(letters, target) < 16) {
            display (letters);
            const answer = await ask(`You have ${check(letters, target)} correct.  You have made ${moves} moves.  WESZ or X?`);
            if (answer.toLowerCase() === 'w') {
                letters = northWest(letters);
                moves++;
            }
            else if (answer.toLowerCase() === 'e') {
                letters = northEast(letters);
                moves++;
            }
            else if (answer.toLowerCase() === 's') {
                letters = centre(letters);
                moves++;
            }
            else if (answer.toLowerCase() === 'z') {
                letters = southWest(letters);
                moves++;
            }
            else if (answer.toLowerCase() === 'x') {
                letters = southEast(letters);
                moves++;
            }
        }
        display (letters);
        console.log(`You WON in ${moves}!!!`);
    }
}

function ask(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans);
        })
    );
}

function check (inputArray, inputArray2){
    const workArray = [...inputArray];
    const workArray2 = [...inputArray2];
    let matches = 0;
    for (let i = 0; i < inputArray.length; i++){
        if (workArray[i] === workArray2[i]){
            matches++;
        }
    }
    return matches;
}

function shuffle (inputArray) {
    const outputArray = [];
    const workArray = [...inputArray];
    const workArrayLength = workArray.length;
    for (let i = 0; i < workArrayLength; i++){
        let index = Math.floor(Math.random() * workArray.length);
        outputArray.push(workArray[index]);
        workArray.splice(index,1);
    }
    return outputArray;
}

function northWest (inputArray){
    const workArray = [...inputArray];
    const temp = workArray[0];
    workArray[0] = workArray[4];
    workArray[4] = workArray[5];
    workArray[5] = workArray[1];
    workArray[1] = temp;
    return workArray;
}

function northEast (inputArray){
    const workArray = [...inputArray];
    const temp = workArray[2];
    workArray[2] = workArray[6];
    workArray[6] = workArray[7];
    workArray[7] = workArray[3];
    workArray[3] = temp;
    return workArray;
}

function southWest (inputArray){
    const workArray = [...inputArray];
    const temp = workArray[8];
    workArray[8] = workArray[12];
    workArray[12] = workArray[13];
    workArray[13] = workArray[9];
    workArray[9] = temp;
    return workArray;
}

function southEast (inputArray){
    const workArray = [...inputArray];
    const temp = workArray[10];
    workArray[10] = workArray[14];
    workArray[14] = workArray[15];
    workArray[15] = workArray[11];
    workArray[11] = temp;
    return workArray;
}

function centre (inputArray){
    const workArray = [...inputArray];
    const temp = workArray[5];
    workArray[5] = workArray[9];
    workArray[9] = workArray[10];
    workArray[10] = workArray[6];
    workArray[6] = temp;
    return workArray;
}

function display (letters){
    console.log(`=========`);
    console.log(`|${letters[0]}|${letters[1]}|${letters[2]}|${letters[3]}|`);
    console.log(`=========`);
    console.log(`|${letters[4]}|${letters[5]}|${letters[6]}|${letters[7]}|`);
    console.log(`=========`);
    console.log(`|${letters[8]}|${letters[9]}|${letters[10]}|${letters[11]}|`);
    console.log(`=========`);
    console.log(`|${letters[12]}|${letters[13]}|${letters[14]}|${letters[15]}|`);
    console.log(`=========`);
}

main();