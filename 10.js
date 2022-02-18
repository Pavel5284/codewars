function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1){
        return [];
    }
    let sum =0;
    let pos =[];

    for (let i=0; i<input.length; i++){

        if(input[i]>0){
            pos.push(input[i]);
        }
        else{
            sum += input[i];
        }
    }
    return [pos.length, sum];
}