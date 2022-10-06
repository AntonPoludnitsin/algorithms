export const binary_search = (array, targetNumber) => {
    const length = array.length - 1;
    let lowIndex = 0;
    let highIndex = length;

    while (lowIndex <= highIndex) {
        const middleIndex = lowIndex + Math.floor((highIndex - lowIndex) / 2);

        if (array[middleIndex] === targetNumber) {
            return middleIndex;
        } else if (array[middleIndex] > targetNumber) {
            highIndex = middleIndex - 1;
        } else {
            lowIndex = middleIndex + 1;
        }
    }

    return -1;
};
