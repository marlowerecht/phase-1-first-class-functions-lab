// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    const firstTwo = array.slice(0, 2);
    return firstTwo;
}

returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = function(array) {
    const lastTwo = array.slice (2);
    return lastTwo;
}

returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const hello = function(x) {
    x*x;
}

function createFareMultiplier(x) {
    return function(x) {
        return x*x;
    }
}

function fareDoubler(y) {
    return y*2;
}

function fareTripler(y) {
    return y*3;
}

function selectDifferentDrivers(array, func) {

    return func(array);

}