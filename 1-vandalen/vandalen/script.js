"use strict";
var minAge;
var maxAge;
var averageAge;
var i;
var sum;
var tempNames;
var names = "";

var makePerson = function (persArr) {

    var result = {};
    
	minAge = Math.min(persArr[0].age, persArr[1].age, persArr[2].age);
    
    maxAge = Math.max(persArr[0].age, persArr[1].age, persArr[2].age);
    
    averageAge = function () {
        sum = 0;
        
        for (i = 0; i < persArr.length; i += 1) {
            sum += persArr[i].age;
        }
        
        return Math.round(sum / persArr.length);
    };
    
    tempNames = [persArr[0].name, persArr[1].name, persArr[2].name];
    tempNames.sort();
    names = tempNames.join(", ");
    
    result = {minAge: minAge, maxAge: maxAge, averageAge: averageAge(), names: names };
    
    return result;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);