"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var isOpen = false;
var myName = 'alice';
var age = 30;
var list = [0, 1, 2, 3];
var me = ["Alice", 30];
var job = interfaces_1["default"].WebDev;
var phone = "Pixel";
var tablet = 3;
var sayWord = function (word) {
    if (word === void 0) { word = "Hello"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayWord("Scott", "Wes");
var newName = 'Scott';
newName = "Wes";
console.log(newName);
var newNameTwo = newName;
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
var dog = "sammy";
dog = null;
console.log(dog);
dog = "Lucy";
dog = undefined;
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name, age);
    return name;
};
sayName({
    age: 32
});
function printLable(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLable(myObj);
var createContent2 = function (contentType) { };
createContent2(interfaces_1.Type2.Video);
console.log(interfaces_1.Type2.Quiz);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return "goal!";
    };
    return Team;
}());
var redWings = new Team('Red Wings');
redWings.score();
redWings.teamName;
