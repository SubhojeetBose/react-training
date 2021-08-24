var input = [12, 11, 3, 4, 5, 12, 11, 45, 87, 12];

function mostFrequent(input) {
    if(!input || input.length == 0) {
        console.log("Invalid input");
    }

    var numberHash = {};
    var mostFrequentCount = 1;
    var mostFrequentNumber = input[0];

    input.forEach(value => {
        if(value in numberHash) {
            numberHash[value]+=1;
            if(mostFrequentCount <= numberHash[value]) {
                mostFrequentCount = numberHash[value];
                mostFrequentNumber = value;
            }
        } else {
            numberHash[value] = 1;
        }
    })

    console.log(`${mostFrequentNumber} ( ${mostFrequentCount} times )`);
}

mostFrequent(input);