function findMostRepeatedLetter(text) {
    const cleanedText = text.replace(/\s/g, '').toLowerCase();

    const letterCount = {};

    let maxCount = 0;

    let mostRepeatedLetter = null;

    for (const letter of cleanedText) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;

        if (letterCount[letter] > maxCount) {
            maxCount = letterCount[letter];
            mostRepeatedLetter = letter;
        }
    }

    return mostRepeatedLetter;
}

module.exports = findMostRepeatedLetter;