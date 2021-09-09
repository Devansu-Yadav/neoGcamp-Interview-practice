const ram = {
    name: "Ram",
    power: 2500,
    yuga: "Treta"
}

const krishna = {
    name: "Krishna",
    power: 2325,
    yuga: "Dwapar"
}

function morePower(person1, person2) {
    return person1.power + (person1.name.length * 35)  > person2.power + (person2.name.length * 35) ? person1 : person2;
}

const outputPerson = morePower(ram, krishna);
console.log(outputPerson.name + ", " + outputPerson.power);