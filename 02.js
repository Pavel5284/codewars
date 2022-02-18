const reverseSeq = n => {
    const arr = [];

    for(i = n; i >= 1; i--) {
        arr.push(i);
    }

    return arr;
};