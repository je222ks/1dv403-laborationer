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
    
    // Förstår inte riktigt hur jag fått detta att fungera. Nu när jag tittar på det i efterhand känns det som att det fattas ngt.
    // Tror att jag utgått efter detta http://www.w3schools.com/jsref/jsref_sort.asp - var points = [40,100,1,5,25,10];
    // points.sort(function(a,b){return a-b}); men jag kan inte säga att jag i nuläget förtår fullt ut hur detta fungerar.
    sortedNames = sortedNames.sort(function (a, b) { return a.toString().localeCompare(b.toString()); });
    
    person.names = sortedNames.join(", ");
    
    return person;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

