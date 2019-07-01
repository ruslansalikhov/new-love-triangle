/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter = 0;
    let checked = new Set();
    preferences.forEach( (value, i) => {
        if (!checked.has(i) && value - 1 > i)
            if (preferences[preferences[value-1]-1]-1 === i ) {
                counter++;
                checked.add(value-1);
            }
    });
    return counter;
};
