function main() {
    //
    var lastName = "Bezos";
    var thirdToLastLetterOfLastName = lastName[lastName.length - 3];
    //

    return thirdToLastLetterOfLastName;
}

console.log(main());
module.exports = main;