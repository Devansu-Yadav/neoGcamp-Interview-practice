const ram = {
    name: "Ram",
    age: 25,
    yuga: "Treta"
}

const krishna = {
    name: "Krishna",
    age: 31,
    yuga: "Dwapar"
}

function moreAge(person1, person2) {
    return person1.age > person2.age ? person1 : person2;
}

const outputPerson = moreAge(ram, krishna);
console.log(outputPerson.name + ", " + outputPerson.age);