"use strict";

var makePerson = function (persArr) {

    var person = {};
    
    person.minAge = 0;
    person.maxAge = 0;
    person.averageAge = 0;
    person.names = "";
    var sortedNames = [];
    var i;
    
	person.minAge = Math.min(persArr[0].age, persArr[1].age, persArr[2].age);
    
    person.maxAge = Math.max(persArr[0].age, persArr[1].age, persArr[2].age);

    for (i = 0; i < persArr.length; i += 1) {
        sortedNames[i] = persArr[i].name;
        person.averageAge += persArr[i].age;
    }
    
    person.averageAge = Math.round(person.averageAge / persArr.length);
    
    sortedNames = sortedNames.sort(function (a, b) { return a.toString().localeCompare(b.toString()); });
    
    person.names = sortedNames.join(", ");
    
    return person;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

