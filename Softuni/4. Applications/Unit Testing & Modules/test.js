const chai = require('chai').assert; // This will search in node_modules and return it if found
const calc = require('./calculator');

// mocha 
describe('Calc sum', function () {
    it('Should return positive number', function () {
        // arrange 
        let firstNumber = 1;
        let secondNumber = 5;
        
        // act 
        let result = calc.sum(firstNumber, secondNumber);

        // assert 
        assert.equal(result, 6);
    });

    it('Should return negative number', function () {

        let result = calc.sum(-5, -10);

        assert.equal(result, -15);
    });

});