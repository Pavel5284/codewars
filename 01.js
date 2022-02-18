function abbrevName(name){

    const arr = name.split(' ');
    const firstName = arr[0];
    const lastName = arr[1];
    const result = firstName[0].toUpperCase() + '.' + lastName[0].toUpperCase();

    return result;

}