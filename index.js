// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
    bestCustomer = name;
}

function changeLeastFavoriteCustomer(name) {
    leastFavoriteCustomer = name;
}