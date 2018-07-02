"use strict";

var name = "Pit Doe";
var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

console.log(getFirstName(name));
